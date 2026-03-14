require('dotenv').config();
const { generateResumePdf } = require('./src/services/ai.service');

(async () => {
    try {
        console.log("Starting PDF generation...");
        const buffer = await generateResumePdf({
            resume: "My name is Swarup. I am a software engineer.",
            jobDescription: "Google needs a software engineer.",
            selfDescription: "I am a good fit."
        });
        console.log("PDF generated! Size:", buffer.length);
        process.exit(0);
    } catch (err) {
        console.error("Error generating PDF:", err);
        process.exit(1);
    }
})();
