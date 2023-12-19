import React from "react";
import {Footer} from "@/components/Footer";
import {Header} from "@/components/Header";
import {Hero} from "@/components/Hero";

export default function MainLayout({children}: { children: React.ReactNode }) {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}
