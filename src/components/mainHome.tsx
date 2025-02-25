"use client"

import { useEffect, useState } from "react";
import { HeaderPage } from "./headerPage";
import { TabPc } from "./tablePc/tabPc";
import { carregarDados } from "@/api/axios";
import { Dados } from "@/types/typeDados";
import { TabMobile } from "./tableMobile/tabMobile";

export const MainHome = () => {

    const [getDados, setDados] = useState<Dados[] | null>(null);

    const [inputFilter, setInputFilter] = useState("");
    const [getDadosFilter, setDadosFilter] = useState<Dados[] | null>(null);

    useEffect(() => {
        const filtrarDados = () => {
            if(getDados) {
                const dadosFiltrados = getDados.filter((item) =>
                    item.name.toLowerCase().includes(inputFilter.toLowerCase()) || 
                    item.job.toLowerCase().includes(inputFilter.toLowerCase()) ||
                    item.phone.includes(inputFilter)
                );
                setDadosFilter(dadosFiltrados);
                console.log(dadosFiltrados);
            }  
        };
        filtrarDados();
    }, [inputFilter]);

    useEffect(() => {
        const fazerReq = async () => {
            const dados = await carregarDados();
            if (dados) {
                setDados(dados);
            }
        }

        fazerReq();
    }, []);

    return (
        <main className="pb-20">
            <HeaderPage inputFilter={inputFilter} setInputFilter={setInputFilter} />
            <div className="hidden md:flex">
                <TabPc dados={getDados} dadosFiltrados={getDadosFilter}/>
            </div>
            <div className="md:hidden">
                <TabMobile dados={getDados} />
            </div>
        </main>
    );
}