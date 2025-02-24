import { Dados } from "@/types/typeDados";
import { TabPcThead } from "./tabPcThead"
import { TabPcTr } from "./tabPcTr";

type Props = {
    dados: Dados[] | null;
}

export const TabPc = ({ dados }: Props) => {
    return (
        <table className="min-w-full">
            <TabPcThead />
            <tbody>
                {dados && dados.map((item) => (
                    <TabPcTr item={item} key={item.id}/>
                ))}
            </tbody>
        </table>
    );
}