import { Dados } from "@/types/typeDados";
import { ChevronDown } from "lucide-react";

type Props = {
    item: Dados;
}

export const TabMobileTr = ({ item }: Props) => {
    return (
        <tr className="bg-white text-[16px] border-b border-t-white">
            <td className="h-[60px] flex justify-center items-center">
                <img
                    className="w-[34px] rounded-full"
                    src={`${item.image}`}
                    alt="avatar"
                />
            </td>
            <td className="px-4 py-2">
                {item.name}
            </td>
            <td className="px-4 py-2 flex justify-end items-center text-[#0500FF]">
                <ChevronDown />
            </td>
        </tr>
    );
}