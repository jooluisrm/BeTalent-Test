import { Dados } from "@/types/typeDados";
import { TabMobileThead } from "./tabMobileThead";
import { TabMobileTr } from "./tabMobileTr";

type Props = {
    dados: Dados[] | null;
    dadosFiltrados: Dados[] | null;
}

export const TabMobile = ({ dados, dadosFiltrados }: Props) => {
    return (
        <table className="min-w-full select-none">
            <TabMobileThead />
            <tbody>
                {dados && !dadosFiltrados && dados.map((item) => (
                    <TabMobileTr item={item} key={item.id} />
                ))}

                {
                    dadosFiltrados && dadosFiltrados.map((item) => (
                        <TabMobileTr item={item} key={item.id} />
                    )) 
                }
                {
                    dadosFiltrados && dadosFiltrados.length === 0 && (
                        <tr>
                            <th className="w-[150px]">Não Encontrado!</th>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
}