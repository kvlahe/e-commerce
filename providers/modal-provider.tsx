"use client"

import { StoreModal } from "@/components/modals/store-modal";
import { tree } from "next/dist/build/templates/app-page";

import { useEffect, useState } from "react"

export const ModalProvider= () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <StoreModal/>
        </>
    )
}

