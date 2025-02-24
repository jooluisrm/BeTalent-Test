type Props = {
    text: string;
    rounded?: "left" | "right";
    type?: "p" | "g";
}

export const TabPcTh = ({ text, rounded, type }: Props) => {
    return (
        <th
            className={`
                ${rounded === "left" ? "rounded-tl-lg" : ""} 
                ${rounded === "right" ? "rounded-tr-lg" : ""}
                ${type === "p" && "w-[90px]"}
                ${type === "g" && "text-end px-6"}
            `}
        >
            {text}
        </th>
    );
}