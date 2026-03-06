const { GoogleGenAI } = require("@google/genai");
const { z } = require('zod')
const { zodToJsonSchema } = require("zod-to-json-schema");
// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});
const interviewReportSchema = z.object({
    matchScore: z
        .number()
        .min(0)
        .max(100)
        .describe(
            "Match score between candidate and job requirements (0-100). 100 means perfect match."
        ), technicalQuestions: z.array(z.object({
            question: z.string().describe("the technical quesiton can be asked in interview"),
            intention: z.string().describe("the intention of the interview behind the question"),
            answer: z.string().describe("how to answer the question ,what points to cover,what approach to take etc."),
        })).describe("technical quesiton can be asked in the interview along with their intention and how to answer them"),
    behavioralQuestions: z.array(z.object({
        question: z.string().describe("the technical quesiton can be asked in interview"),
        intention: z.string().describe("the intention of the interview behind the question"),
        answer: z.string().describe("how to answer the question ,what points to cover,what approach to take etc."),
    })).describe("Behavioral quesiton can be asked in the interview along with their intention and how to answer them"),
    skillGaps: z.array(z.object({
        skill: z.string().describe("the skill which is gap in the candidate"),
        severity: z.string().describe("the severity of the skill gap can be low, medium or high"),
    })).describe("list of skill gaps in the candidate along with their severity"),

    preparationPlan: z.array(z.object({
        day: z.string().describe("the day number of the preparation plan"),
        focus: z.string().describe("the main focus of the day in the preparation plan"),
        tasks: z.string().describe("the tasks for the day in the preparation plan"),
    })).describe("the preparation plan for the candidate to prepare for the interview"),


})
async function invoke({ jobdescribe, resume, selfdescribe }) {
    const prompt = `
You are an expert technical interviewer and career coach.

Your task is to generate a structured interview preparation report for a candidate.

Analyze the following information carefully and produce a detailed report.

Job Description:
${jobdescribe}

Candidate Resume:
${resume}

Candidate Self Description:
${selfdescribe}

Instructions:

Return ONLY valid JSON that strictly follows the provided schema.

Generate the following information:

1. title
- The job title inferred from the job description.

2. matchScore
- A number between 0 and 100.
- Represents how well the candidate matches the job description based on resume and self description.

3. technicalQuestions
- Generate 5 realistic technical interview questions related to the job.
- Each item must be an object with:
  - question
  - intention (why the interviewer asks this question)
  - answer (how the candidate should answer, what key points to cover).

4. behavioralQuestions
- Generate 5 behavioral interview questions.
- Focus on teamwork, communication, leadership, problem solving, and conflict resolution.
- Each item must include question, intention, and answer guidance.

5. skillGaps
- Identify missing or weak skills in the candidate compared to the job description.
- Each item must contain:
  - skill
  - severity (must be exactly one of: "low", "medium", "high")

6. preparationPlan
- Create a 7 day preparation plan.
- Each day must include:
  - day (number starting from 1)
  - focus (main learning goal of the day)
  - tasks (array of practical tasks the candidate should perform)

Important Rules:
- Return ONLY JSON.
- Do NOT include explanations.
- Do NOT include markdown.
- Arrays must contain objects exactly matching the schema.
- Ensure all fields exist and match the schema types.

Generate the interview report now.
`;
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: zodToJsonSchema(interviewReportSchema),
        },
    })

    return JSON.parse(response.text)

}

module.exports = invoke
