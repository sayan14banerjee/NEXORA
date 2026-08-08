"use client";

import Header from "@/components/Header";
import ChatInput from "@/components/chat/ChatInput";
import ChatWindow from "@/components/chat/ChatWindow";

import AppLayout from "@/components/layout/AppLayout";
import Sidebar from "@/components/sidebar/Sidebar";

import { useChat } from "@/hooks/useChat";

export default function Home() {
    const {
        message,
        setMessage,
        messages,
        loading,
        sendMessage,
    } = useChat();

    return (
        <AppLayout sidebar={<Sidebar />}>
            <div className="flex flex-col flex-1 bg-zinc-950">

                <Header />

                <main className="flex-1 flex overflow-hidden">
                    <ChatWindow
                        messages={messages}
                        onPromptClick={setMessage}
                    />
                </main>

                <ChatInput
                    message={message}
                    setMessage={setMessage}
                    sendMessage={sendMessage}
                    loading={loading}
                />

            </div>
        </AppLayout>
    );
}