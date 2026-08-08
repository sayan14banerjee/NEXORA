import ConversationItem from "./ConversationItem";

import { useConversation } from "@/hooks/useConversation";

export default function ConversationList() {

    const {
        conversations,
        loading,
        error,
    } = useConversation();

    if (loading) {
        return (
            <div className="p-4 text-zinc-400">
                Loading conversations...
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-4 text-red-500">
                {error}
            </div>
        );
    }

    if (conversations.length === 0) {
        return (
            <div className="p-4 text-zinc-500">
                No conversations yet.
            </div>
        );
    }

    return (
        <div
            className="
                flex-1
                overflow-y-auto
                px-2
                pb-4
            "
        >
            {conversations.map((conversation) => (

                <ConversationItem
                    key={conversation.id}
                    title={conversation.title}
                />

            ))}
        </div>
    );

}