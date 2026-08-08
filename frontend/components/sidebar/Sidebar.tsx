import NewChatButton from "./NewChatButton";
import ConversationList from "./ConversationList";

export default function Sidebar() {
    return (
        <aside
            className="
                w-[280px]
                h-full
                border-r
                border-zinc-800
                bg-zinc-900
                flex
                flex-col
            "
        >
            <div className="p-4 border-b border-zinc-800">

                <h1 className="text-2xl font-bold">
                    NEXORA
                </h1>

            </div>

            <div className="p-4">

                <NewChatButton />

            </div>

            <ConversationList />
        </aside>
    );
}

// export default function Sidebar() {
//     return (
//         <aside className="w-[280px] bg-red-500 h-screen text-white">
//             Sidebar
//         </aside>
//     );
// }