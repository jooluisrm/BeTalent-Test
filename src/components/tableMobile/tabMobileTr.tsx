"use client"

import { Dados } from "@/types/typeDados";
import { formatDate } from "@/utils/formatarData";
import { formatPhoneNumber } from "@/utils/formatarPhone";
import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

type Props = {
    item: Dados;
}

export const TabMobileTr = ({ item }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef<HTMLTableCellElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (isOpen) {
            setHeight(contentRef.current?.scrollHeight || 0);
        } else {
            setHeight(0);
        }
    }, [isOpen]);

    return (
        <>
            <tr
                className={`bg-white text-[16px] border-t-white cursor-pointer ${isOpen ? "border-b-0" : "border-b"}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <td className="h-[60px] flex justify-center items-center">
                    <img
                        className="w-[34px] rounded-full"
                        src={`${item.image}`}
                        alt="avatar"
                    />
                </td>
                <td className="px-4 py-2">
                    {item.name}
                </td>
                <td className="px-4 py-2 flex justify-end items-center text-[#0500FF]">
                    <ChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </td>
            </tr>
            <tr>
                <td colSpan={3} className="p-0">
                    <div
                        ref={contentRef}
                        style={{ height: `${height}px` }}
                        className="overflow-hidden transition-[height] duration-300"
                    >
                        <div className="px-4 py-2 bg-white border-b">
                            <div className="flex flex-col gap-3">
                                <div className="flex justify-between border-b border-dotted">
                                    <strong>Cargo</strong>
                                    <span>{item.job}</span>
                                </div>
                                <div className="flex justify-between border-b border-dotted">
                                    <strong>Data de admissão</strong>
                                    <span>{formatDate(item.admission_date)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <strong>Telefone</strong>
                                    <span>{formatPhoneNumber(item.phone)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
        </>
    );
}
