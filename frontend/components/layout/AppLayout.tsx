import { ReactNode } from "react";

interface Props {
    sidebar: ReactNode;
    children: ReactNode;
}

export default function AppLayout({
    sidebar,
    children,
}: Props) {
    return (
        <div className="flex h-screen bg-zinc-950 text-white overflow-hidden">
            {sidebar}

            <main className="flex flex-1 min-w-0">
                {children}
            </main>
        </div>
    );
}