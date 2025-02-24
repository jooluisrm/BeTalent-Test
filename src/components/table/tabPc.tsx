import { TabPcThead } from "./tabPcThead"
import { TabPcTr } from "./tabPcTr";

export const TabPc = () => {
    return (
        <table className="min-w-full">
            <TabPcThead />
            <tbody>
                <TabPcTr />
            </tbody>
        </table>

    );
}