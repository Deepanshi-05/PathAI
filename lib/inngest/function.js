import { db } from "@/lib/prisma";
import { inngest } from "./client";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const generateIndustryInsights = inngest.createFunction(
  { name: "Generate Industry Insights" },
  { cron: "0 0 * * 0" }, // every Sunday
  async ({ step }) => {
    const industries = await step.run("Fetch industries", async () => {
      return await db.industryInsight.findMany({
        select: { industry: true },
      });
    });

    for (const { industry } of industries) {
      if (!industry) continue;

      const prompt = `
        Analyze the current state of the ${industry} industry and provide insights in ONLY the following JSON format:

        {
          "salaryRanges": [
            { "role": "string", "min": number, "max": number, "median": number, "location": "string" }
          ],
          "growthRate": number,
          "demandLevel": "High" | "Medium" | "Low",
          "topSkills": ["skill1", "skill2"],
          "marketOutlook": "Positive" | "Neutral" | "Negative",
          "keyTrends": ["trend1", "trend2"],
          "recommendedSkills": ["skill1", "skill2"]
        }

        DO NOT return any notes or explanation — only valid JSON.
      `;

      const response = await step.run(`Call Gemini for ${industry}`, async () => {
        const result = await model.generateContent(prompt);
        const raw = result.response.text().trim();
        console.log("Gemini raw:", raw);

        const cleaned = raw.replace(/```(?:json)?\n?/g, "").trim();
        return JSON.parse(cleaned); // may throw if invalid
      });

      await step.run(`Update insights for ${industry}`, async () => {
        await db.industryInsight.update({
          where: { industry },
          data: {
            ...response,
            lastUpdated: new Date(),
            nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          },
        });
      });
    }
  }
);
