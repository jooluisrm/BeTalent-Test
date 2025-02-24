import { TabPcTh } from "./tabPcTh"

export const TabPcThead = () => {
    return (
        <thead className="bg-[#0500FF] text-white h-[47px]">
            <tr>
                <TabPcTh text="FOTO" rounded="left"/>
                <TabPcTh text="NOME"/>
                <TabPcTh text="CARGO"/>
                <TabPcTh text="DATA DE ADMISSÃO"/>
                <TabPcTh text="TELEFONE" rounded="right"/>
            </tr>
        </thead>
    );
}