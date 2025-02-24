import { Dados } from "@/types/typeDados";
import { formatDate } from "@/utils/formatarData";
import { formatPhoneNumber } from "@/utils/formatarPhone";

type Props = {
    item: Dados;
}

export const TabPcTr = ({ item }: Props) => {
    const dataFormatada = formatDate(item.admission_date);
    const phoneFormatado = formatPhoneNumber(item.phone);

    return (
        <tr className="bg-white text-center text-[16px] border-b border-t-white">
            <td className="px-5 py-3 flex justify-center items-center">
                <img
                    className="w-[34px] rounded-full"
                    src={`${item.image}`}
                    alt="avatar"
                />
            </td>
            <td className="px-4 py-2">{item.name}</td>
            <td className="px-4 py-2">{item.job}</td>
            <td className="px-4 py-2">{dataFormatada}</td>
            <td className="px-4 py-2">{phoneFormatado}</td>
        </tr>
    );
}