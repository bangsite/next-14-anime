import {ReactElement} from "react";
import {Hero} from "@/components/Hero";
import MainLayout from "../layouts/MainLayout";
import RootLayout from "@/layouts/RootLayout";

const Home = () => {
    return (
        <>
                <Hero/>
                <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
                    <h2 className="text-3xl text-white font-bold">Explore Anime</h2>

                    <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
                        section 1
                    </section>
                </main>
        </>
    )
}

Home.getLayout = (page: ReactElement) => (
    <MainLayout>
        {page}
    </MainLayout>
)

export default Home;


