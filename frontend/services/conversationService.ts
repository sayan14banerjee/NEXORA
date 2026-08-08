import { Conversation } from "@/types/conversation";

const API_URL = "http://127.0.0.1:8000/conversations";

export async function getConversations(): Promise<Conversation[]> {

    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Failed to fetch conversations");
    }

    return await response.json();

}

export async function createConversation() {

    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
    });

    if (!response.ok) {
        throw new Error("Failed to create conversation");
    }

    return await response.json();
}