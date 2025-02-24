import { Dados } from "@/types/typeDados";

type Props = {
    item: Dados;
}

export const TabPcTr = ({ item }: Props) => {
    return (
        <tr className="bg-white text-center text-[16px]">
            <td className="px-5 py-3 flex justify-center items-center">
                <img
                    className="w-[34px] rounded-full"
                    src={`${item.image}`}
                    alt="avatar"
                />
            </td>
            <td className="px-4 py-2">{item.name}</td>
            <td className="px-4 py-2">{item.job}</td>
            <td className="px-4 py-2">{item.admission_date}</td>
            <td className="px-4 py-2">{item.phone}</td>
        </tr>
    );
}