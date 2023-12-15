import {ReactElement, ReactNode} from "react";
import {NextPage} from "next";
import {AppProps} from "next/app";

import "../styles/globals.css";
import RootLayout from "@/layouts/RootLayout";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export default function MyApp({Component, pageProps}: AppPropsWithLayout) {
    // Use the layout defined at the page level, if available
    const renderWithLayout = Component.getLayout ?? ((page: ReactNode) => page)

    return (<RootLayout>
            {renderWithLayout(<Component {...pageProps}/>)}
        </RootLayout>

    )

}
