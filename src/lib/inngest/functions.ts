import { inngest } from "./client";

export const checkEmailsCron = inngest.createFunction(
    { id: "check-emails-cron" },
    { cron: "*/5 * * * *" }, // Run every 5 minutes
    async ({ step }) => {
        // 1. Fetch all users from Firestore who have an active AgentConfig
        const activeUsers: any[] = await step.run("fetch-active-users", async () => {
            return []; // TODO: Implement Firestore query
        });

        // 2. Loop through each active user and fetch their new emails
        for (const user of activeUsers) {
            await step.sendEvent("process-user-email", {
                name: "email.process.user",
                data: { userId: user.id }
            });
        }

        return { usersProcessed: activeUsers.length };
    }
);
