import React from "react";
import {Poppins} from 'next/font/google';
import {ThemeProvider} from "@/components/ThemeProvider";
import Head from "next/head";

import customMetaData from '../utils/customMetadata';
import {useRouter} from "next/router";

const poppins = Poppins({
    weight: ['400', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
});

export default function RootLayout({children}: { children: React.ReactNode }) {
    const router = useRouter();
    const {pathname} = router;
    const metaData = customMetaData(pathname);


    return (<>
            {/*<html lang="en">*/}
            <style jsx global>{`html {font-family: ${poppins.style.fontFamily};}`}</style>
            <Head>
                <title>{metaData.title || 'Default Title'}</title>
                <meta name="description" content={metaData.description || 'Default Description'}/>
            </Head>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                {children}
            </ThemeProvider>
            {/*</html>*/}
        </>
    )
}
