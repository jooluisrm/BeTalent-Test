"use client"

import { useEffect, useState } from "react";
import { HeaderPage } from "./headerPage";
import { TabPc } from "./tablePc/tabPc";
import { carregarDados } from "@/api/axios";
import { Dados } from "@/types/typeDados";
import { TabMobile } from "./tableMobile/tabMobile";

export const MainHome = () => {

    const [getDados, setDados] = useState<Dados[] | null>(null);
    const [loading, setLoading] = useState(true);

    const [inputFilter, setInputFilter] = useState("");
    const [getDadosFilter, setDadosFilter] = useState<Dados[] | null>(null);

    useEffect(() => {
        const removerAcentos = (str: string) =>
            str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        const filtrarDados = () => {
            if (getDados) {
                const dadosFiltrados = getDados.filter((item) =>
                    removerAcentos(item.name.toLowerCase()).includes(removerAcentos(inputFilter.toLowerCase())) ||
                    removerAcentos(item.job.toLowerCase()).includes(removerAcentos(inputFilter.toLowerCase())) ||
                    item.phone.includes(inputFilter)
                );
                setDadosFilter(dadosFiltrados);
            }
        };

        if (inputFilter.trim().length !== 0) {
            filtrarDados();
        } else {
            setDadosFilter(getDados || []);
        }
    }, [inputFilter, getDados]);


    useEffect(() => {
        const fazerReq = async () => {
            setLoading(true);
            try {
                const dados = await carregarDados();
                if (dados) {
                    setDados(dados);
                    setLoading(false);
                }
            } catch (error) {
                setLoading(false);
                alert("Erro ao carregar dados");
            }
        }

        fazerReq();
    }, []);

    return (
        <main className="pb-20">
            <HeaderPage inputFilter={inputFilter} setInputFilter={setInputFilter} />
            <div className="hidden md:flex justify-center">
                {
                    !loading ? <TabPc dados={getDados} dadosFiltrados={getDadosFilter} /> :
                        <p className="font-bold animate-pulse">Carregando...</p>
                }
            </div>
            <div className="flex justify-center md:hidden">
                {
                    !loading ? <TabMobile dados={getDados} dadosFiltrados={getDadosFilter} /> :
                        <p className=" font-bold animate-pulse">Carregando...</p>
                }
            </div>
        </main>
    );
}