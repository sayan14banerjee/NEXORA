import { Plus } from "lucide-react";

interface Props {
    onClick: () => void;
}

export default function NewChatButton({
    onClick,
}: Props) {

    return (

        <button
            onClick={onClick}
            className="
            flex
                items-center
                justify-center
                gap-2
                w-full
                rounded-xl
                bg-white
                text-black
                py-3
                font-medium
                transition
                hover:bg-zinc-200"
        >

            New Chat

        </button>

    );

}