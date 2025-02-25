import { Dados } from "@/types/typeDados";
import { TabPcThead } from "./tabPcThead"
import { TabPcTr } from "./tabPcTr";

type Props = {
    dados: Dados[] | null;
    dadosFiltrados: Dados[] | null;
}

export const TabPc = ({ dados, dadosFiltrados }: Props) => {
    return (
        <table className="min-w-full">
            <TabPcThead />
            <tbody>
                {dados && !dadosFiltrados && dados.map((item) => (
                    <TabPcTr item={item} key={item.id} />
                ))}
                {
                    dadosFiltrados && dadosFiltrados.map((item) => (
                        <TabPcTr item={item} key={item.id} />
                    ))
                }
            </tbody>
        </table>
    );
}