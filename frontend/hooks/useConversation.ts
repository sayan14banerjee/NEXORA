import { useEffect, useState } from "react";

import { Conversation } from "@/types/conversation";
import { getConversations } from "@/services/conversationService";
import { createConversation } from "@/services/conversationService";

export function useConversation() {

    const [conversations, setConversations] = useState<Conversation[]>([]);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState<string | null>(null);

    useEffect(() => {

        loadConversations();

    }, []);

    async function loadConversations() {

        try {

            setLoading(true);

            const data = await getConversations();

            setConversations(data);

        } catch (err) {

            console.error(err);

            setError("Failed to load conversations.");

        } finally {

            setLoading(false);

        }

    }

    async function newConversation() {

    try {

        const conversation = await createConversation();

        setConversations((prev) => [
            conversation,
            ...prev,
        ]);

        return conversation;

    } catch (err) {

        console.error(err);

        return null;

    }

}

   return {

    conversations,

    loading,

    error,

    loadConversations,

    newConversation,

};

}


