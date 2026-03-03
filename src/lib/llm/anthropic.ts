import { Anthropic } from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
});

export const evaluateAndDraftEmail = async (
    emailBody: string,
    sender: string,
    subject: string,
    personality: string = "Professional and concise"
) => {
    const prompt = `You are an AI Email Assistant. 
Your job is to read an incoming email and decide if it requires a reply from a human. 
If it is a newsletter, automated alert, calendar invite notification, or non-actionable email, DO NOT reply. Just output exactly "SKIP".
If it DOES require a reply, draft a professional reply based on this personality profile: "${personality}". 
Output ONLY the draft reply text. Do not output subject lines or explanations.

Email Details:
From: ${sender}
Subject: ${subject}
Body:
${emailBody}`;

    const response = await anthropic.messages.create({
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 1024,
        messages: [{ role: "user", content: prompt }],
    });

    const responseText = response.content[0].type === 'text' ? response.content[0].text : "";

    if (responseText.trim() === "SKIP") {
        return { shouldReply: false, draft: null };
    }

    return { shouldReply: true, draft: responseText.trim() };
};
