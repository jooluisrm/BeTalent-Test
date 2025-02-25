import { Dados } from "@/types/typeDados";
import { TabMobileThead } from "./tabMobileThead";
import { TabMobileTr } from "./tabMobileTr";

type Props = {
    dados: Dados[] | null;
}

export const TabMobile = ({dados}: Props) => {
    return (
        <table className="min-w-full select-none">
            <TabMobileThead />
            <tbody>
                {dados && dados.map((item) => (
                    <TabMobileTr item={item} key={item.id}/>
                ))}
            </tbody>
        </table>
    );
}