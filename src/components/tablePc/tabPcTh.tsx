type Props = {
    text: string;
    rounded?: "left" | "right";
}

export const TabPcTh = ({ text, rounded }: Props) => {
    return (
        <th
            className={`
                ${rounded === "left" ? "rounded-tl-lg" : ""} 
                ${rounded === "right" ? "rounded-tr-lg" : ""}
            `}
        >
            {text}
        </th>
    );
}