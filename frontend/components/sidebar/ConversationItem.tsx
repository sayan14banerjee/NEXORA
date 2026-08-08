interface Props {
    title: string;
}

export default function ConversationItem({
    title,
}: Props) {
    return (
        <button
            className="
                w-full
                rounded-xl
                px-3
                py-3
                text-left
                transition
                hover:bg-zinc-800
            "
        >
            <p className="truncate text-sm">
                {title}
            </p>
        </button>
    );
}