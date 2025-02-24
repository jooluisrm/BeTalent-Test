import { TabPcTh } from "../tablePc/tabPcTh";

export const TabMobileThead = () => {
    return (
        <thead className="bg-[#0500FF] text-white h-[47px]">
            <tr>
                <TabPcTh text="FOTO" rounded="left" type="p" />
                <TabPcTh text="NOME" type="p" />
                <TabPcTh text="●" rounded="right" type="g" />
            </tr>
        </thead>
    );
}