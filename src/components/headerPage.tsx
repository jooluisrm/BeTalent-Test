import { Search } from "lucide-react";

type Props = {
    setInputFilter: (e: string) => void;
    inputFilter: string
}

export const HeaderPage = ({inputFilter, setInputFilter}: Props) => {
    return (
        <div className="flex flex-col gap-5 md:flex-row md:justify-between py-10">
            <h1 className="text-[20px] font-bold">Funcionários</h1>
            <div className="relative flex items-center w-full md:w-[287px]">
                <input
                    type="search"
                    placeholder="Pesquisar"
                    className="border rounded-lg py-3 pl-4 pr-10 w-full h-[48px]"
                    value={inputFilter}
                    onChange={(e) => setInputFilter(e.target.value)}
                />
                <Search className="absolute right-3 text-[#DFDFDF]" width={24}/>
            </div>
        </div>
    );
}