const { PDFParse } = require('pdf-parse');
const interviewReportByAi = require("../services/ai.service");
const interviewReportModel = require("../model/interviewReport.model");

async function generateInterviewController(req, res) {
    try {
        const resumeFile = req.file
        if (!resumeFile) {
            return res.status(400).json({ message: "resume file is required" })
        }

        const { jobdescribe, selfdescribe } = req.body
        //NOTE - guard required fields before PDF parsing and AI calls.
        if (!jobdescribe || !selfdescribe) {
            return res.status(400).json({ message: "jobdescribe and selfdescribe are required" })
        }

        // read pdf buffer using pdf-parse v2 API
        const parser = new PDFParse({ data: resumeFile.buffer })
        let resumeContent;
        try {
            resumeContent = await parser.getText()
        } finally {
            await parser.destroy().catch(() => { })
        }

        //REVIEW - empty PDF text usually means scanned/image-only resume or bad file content.
        if (!resumeContent?.text?.trim()) {
            return res.status(400).json({ message: "unable to extract text from resume pdf" })
        }

        //NOTE - using ai service for creating the interview report based on the job description ,resume and self description of the candidate
        const interviewReportWithAi = await interviewReportByAi({ jobdescribe, resume: resumeContent.text, selfdescribe })
        //NOTE - at the end we are saving the interview report in our database for future reference and also we can show the report to the user in his dashboard
        const interviewReport = await interviewReportModel.create({
            user: req.user.id,
            jobDescription: jobdescribe,
            resume: resumeContent.text,
            selfDescription: selfdescribe,
            ...interviewReportWithAi
        })
        return res.status(200).json({ message: "interview report generated successfully", interviewReport })
    } catch (err) {
        console.log(err)
        //NOTE - service layer attaches statusCode for expected AI/validation failures.
        if (err.statusCode) {
            return res.status(err.statusCode).json({ message: err.message })
        }
        res.status(500).json({ message: "something went wrong" })
    }
}
module.exports = { generateInterviewController }
