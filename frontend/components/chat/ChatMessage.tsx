import { Message } from "@/types/chat";
import { Bot, User } from "lucide-react";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { motion } from "framer-motion";

interface Props {
    message: Message;
}

export default function ChatMessage({ message }: Props) {

    const isUser = message.role === "user";

    return (
        <motion.div
            className={`flex flex-col mb-6 ${isUser ? "items-end" : "items-start"
                }`}
        >
            {/* Sender */}

            <motion.div
                className={`text-sm mb-2 font-medium ${isUser
                        ? "text-blue-400"
                        : "text-gray-400"
                    }`}
            >
                {isUser ? <User /> : <Bot />} {isUser ? " You" : " Assistant"}
            </motion.div>

            {/* Bubble */}

            <motion.div
                className={`
                    max-w-[75%]
                    px-4
                    py-3
                    rounded-2xl
                    whitespace-pre-wrap
                    break-words
                    shadow-md
                    ${isUser
                        ? "bg-gray-800 text-white"
                        : "bg-black-800 text-gray-100"
                    }
                `}
            >
                <motion.div className="relative">

                    <MarkdownRenderer
                        content={message.content}
                    />

                    {message.streaming && (
                        <span
                            className="
                ml-1
                inline-block
                h-5
                w-[2px]
                animate-pulse
                bg-blue-400
                align-middle
            "
                        />
                    )}

                </motion.div>
            </motion.div>
        </motion.div>
    );
}