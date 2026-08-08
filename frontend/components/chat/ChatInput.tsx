"use client";

import { useRef } from "react";
import { SendHorizontal } from "lucide-react";

interface Props {
    message: string;
    setMessage: React.Dispatch<React.SetStateAction<string>>;
    sendMessage: () => void;
    loading: boolean;
}

export default function ChatInput({
    message,
    setMessage,
    sendMessage,
    loading,
}: Props) {

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {

        setMessage(e.target.value);

        const textarea = e.target;

        textarea.style.height = "24px";

        textarea.style.height =
            Math.min(textarea.scrollHeight, 180) + "px";
    };

    const handleSend = () => {

        sendMessage();

        if (textareaRef.current) {
            textareaRef.current.style.height = "24px";
        }
    };

    return (

        <footer className="border-t border-zinc-800 bg-zinc-950 px-6 py-5">

            <div className="max-w-5xl mx-auto">

                <div
                    className="
                        flex
                        items-end
                        rounded-3xl
                        border
                        border-zinc-700
                        bg-zinc-900
                        px-4
                        py-3
                        shadow-lg
                        transition-all
                        duration-300
                        focus-within:border-blue-500
                        focus-within:shadow-blue-500/20
                    "
                >

                    <textarea
                        ref={textareaRef}
                        rows={1}
                        value={message}
                        disabled={loading}
                        placeholder="Message NEXORA..."
                        onChange={handleChange}
                        onKeyDown={(e) => {

                            if (
                                e.key === "Enter" &&
                                !e.shiftKey
                            ) {

                                e.preventDefault();

                                handleSend();

                            }

                        }}
                        className="
                            flex-1
                            resize-none
                            overflow-y-auto
                            bg-transparent
                            outline-none
                            text-white
                            placeholder:text-zinc-500
                            max-h-[180px]
                        "
                    />

                    <button
                        disabled={loading}
                        onClick={handleSend}
                        className="
                            ml-3
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-full
                            bg-blue-600
                            text-white
                            transition-all
                            duration-200
                            hover:scale-105
                            hover:bg-blue-700
                            active:scale-95
                            disabled:bg-zinc-700
                            disabled:cursor-not-allowed
                        "
                    >
                        <SendHorizontal
                            size={18}
                            className={
                                loading
                                    ? "animate-pulse"
                                    : ""
                            }
                        />
                    </button>

                </div>

                <div className="mt-2 flex justify-between text-xs text-zinc-500">

                    <span>
                        Press <strong>Enter</strong> to send
                    </span>

                    <span>
                        Shift + Enter for new line
                    </span>

                </div>

            </div>

        </footer>

    );
}