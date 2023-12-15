import RootLayout from "../../layouts/MainLayout";
import {ReactElement} from "react";
import {Metadata} from "next";

const metadata: Metadata = {
    title: "About us",
    description: "Your favorite anime, all in one place.",
}
const About =()=> {
    return (
        <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
            <h2 className="text-3xl text-white font-bold">About us</h2>
        </main>
    )
}

About.getLayout=(page:ReactElement)=>(
    <RootLayout meta={metadata}>
        {page}
    </RootLayout>
)
export default About;
