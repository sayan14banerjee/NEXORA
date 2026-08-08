"use client";

import { useEffect, useRef, useState } from "react";

import ChatMessage from "./ChatMessage";
import EmptyState from "../EmptyState";

import { Message } from "@/types/chat";

interface Props {
    messages: Message[];
    onPromptClick: (prompt: string) => void;
}

export default function ChatWindow({
    messages,
    onPromptClick,
}: Props) {

    const containerRef = useRef<HTMLDivElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);

    const [autoScroll, setAutoScroll] = useState(true);

    const handleScroll = () => {

        if (!containerRef.current) return;

        const {
            scrollTop,
            scrollHeight,
            clientHeight,
        } = containerRef.current;

        const distanceFromBottom =
            scrollHeight - scrollTop - clientHeight;

        setAutoScroll(distanceFromBottom < 100);
    };

    useEffect(() => {

        if (!autoScroll) return;

        bottomRef.current?.scrollIntoView({
            behavior: "auto",
        });

    }, [messages, autoScroll]);

    return (

        <div
            ref={containerRef}
            onScroll={handleScroll}
            className="
                flex-1
                min-h-0
                overflow-y-auto
                px-6
                py-8
            "
        >

            <div className="max-w-5xl mx-auto h-full">

                {messages.length === 0 ? (

                    <EmptyState
                        onPromptClick={onPromptClick}
                    />

                ) : (

                    <>
                        {messages.map((message) => (

                            <ChatMessage
                                key={message.id}
                                message={message}
                            />

                        ))}

                        <div ref={bottomRef} />

                    </>

                )}

            </div>

        </div>

    );
}