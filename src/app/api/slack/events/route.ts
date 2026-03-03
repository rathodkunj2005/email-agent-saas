import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json();

    // Slack URL Verification (required when setting up Event Subscriptions)
    if (body.type === "url_verification") {
        return NextResponse.json({ challenge: body.challenge });
    }

    // Handle interactive payloads (button clicks)
    if (body.payload) {
        const payload = JSON.parse(body.payload);

        // Check if it's our block action
        if (payload.type === "block_actions") {
            const action = payload.actions[0];

            switch (action.action_id) {
                case "approve_draft":
                    // TODO: Send email
                    // TODO: Update Slack message to show "Approved and Sent!"
                    break;
                case "discard_draft":
                    // TODO: Mark discarded
                    // TODO: Update Slack message to show "Discarded."
                    break;
                case "suggest_changes":
                    // TODO: Open Slack Modal to ask for text
                    break;
            }
        }

        return NextResponse.json({ ok: true });
    }

    return NextResponse.json({ ok: true });
}
