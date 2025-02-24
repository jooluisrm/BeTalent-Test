"use client"

import { useEffect, useState } from "react";
import { HeaderPage } from "./headerPage";
import { TabPc } from "./table/tabPc";
import { carregarDados } from "@/api/axios";
import { Dados } from "@/types/typeDados";

export const MainHome = () => {

    const [getDados, setDados] = useState<Dados[] | null>(null);

    useEffect(() => {
        const fazerReq = async () => {
            const dados = await carregarDados();
            if(dados) {
                setDados(dados);
            }
        }

        fazerReq();
    }, []);

    return (
        <main>
            <HeaderPage />
            <TabPc />
        </main>
    );
}