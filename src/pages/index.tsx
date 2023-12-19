import {ReactElement} from "react";
import {GetServerSideProps} from "next";
import {Icon} from "@iconify/react";

import {AnimeCard} from "@/components/AnimeCard";
import {Button} from "@/components/ui/button";
import {SlideTop} from "@/components/SlideTop";

import MainLayout from "../layouts/MainLayout";
import {fetchDataAnimeHome} from "@/hooks/fetchDataAnimeHome";
import {Anime} from "@/types/anime";

let apiCallCount = 0;

export const getServerSideProps: GetServerSideProps<any> = async () => {
    // @ts-ignore
    const [animeTop, animSeasons, animeAll]= await fetchDataAnimeHome();

    // Increment the API call count
    apiCallCount++;
    console.log(`API has been called ${apiCallCount} times`);
    return {
        props: {
            animeTop,
            animSeasons,
            animeAll
        }
    }
}

const Home = ({animeTop, animSeasons, animeAll}:Record<string, any>) => {
    return (
        <>
            <SlideTop data={animeAll.data}/>

            <main className="container py-8 sm:py-16 flex flex-col gap-8">
                <section className="flex flex-col ">
                    <Button className="bg-gradient-primary w-fit text-white p-4 mb-4 capitalize">
                        <span className="mr-2 font-medium text-xl">Top Anime</span>

                        <Icon icon="iconamoon:arrow-right-2-duotone" width={24}/>
                    </Button>

                    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

                        {animeTop.data && animeTop.data.length ? animeTop.data?.map((item: Anime, index: number) => (
                            <AnimeCard key={item.mal_id} anime={item} index={index}/>)) : ""}
                    </div>
                </section>

                <section className="flex flex-col">
                    <Button className="bg-gradient-primary w-fit text-white p-4 mb-4 capitalize">
                        <span className="mr-2 font-medium text-xl">Anime Seasons</span>

                        <Icon icon="iconamoon:arrow-right-2-duotone" width={24}/>
                    </Button>

                    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

                        {animSeasons.data && animSeasons.data.length ? animSeasons.data?.map((item: Anime, index: number) => (
                            <AnimeCard key={item.mal_id} anime={item} index={index}/>)) : ""}
                    </div>
                </section>

                <section className="flex flex-col">
                    <Button className="bg-gradient-primary w-fit text-white p-4 mb-4 capitalize">
                        <span className="mr-2 font-medium text-xl">Anime All</span>

                        <Icon icon="iconamoon:arrow-right-2-duotone" width={24}/>
                    </Button>

                    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {animeAll.data && animeAll.data.length ? animeAll.data?.map((item: Anime, index: number) => (
                            <AnimeCard key={item.mal_id} anime={item} index={index}/>)) : ""}
                    </div>
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


