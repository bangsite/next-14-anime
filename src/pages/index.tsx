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
    const [animeTrendingKitsu, animeTopJikan, animeSeasonsJikan, animeSchedulesJikan] = await fetchDataAnimeHome();
    console.log(animeSchedulesJikan);

    // Increment the API call count
    apiCallCount++;
    console.log(`API has been called ${apiCallCount} times`);
    return {
        props: {
            animeTrendingKitsu,
            animeTopJikan,
            animeSeasonsJikan,
            animeSchedulesJikan
        }
    }
}

const Home = ({animeTrendingKitsu, animeTopJikan, animeSeasonsJikan, animeSchedulesJikan}: Record<string, any>) => {
    return (
        <>
            <SlideTop data={animeTrendingKitsu.data}/>

            <main className="container py-8 sm:py-16 flex flex-col gap-8">
                <section className="flex flex-col">
                    <div className="flex items-center justify-start gap-8 mb-4">
                        <Button className="bg-gradient-primary w-fit text-white p-4 capitalize">
                            <span className="mr-2 font-medium text-xl">Top Anime</span>

                            <Icon icon="iconamoon:arrow-right-2-duotone" width={24}/>
                        </Button>
                        <div className="flex items-center justify-items-start gap-8">
                            <a href="#" className="text-lg font-medium hover:text-primary">All</a>
                            <a href="#" className="text-lg font-medium hover:text-primary">Anime series</a>
                            <a href="#" className="text-lg font-medium hover:text-primary">Anime single</a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

                        {animeTopJikan.data && animeTopJikan.data.length ? animeTopJikan.data?.map((item: Anime, index: number) => (
                            <AnimeCard key={item.mal_id} anime={item} index={index}/>)) : ""}
                    </div>
                </section>

                <section className="flex flex-col">
                    <Button className="bg-gradient-primary w-fit text-white p-4 mb-4 capitalize">
                        <span className="mr-2 font-medium text-xl">Anime Seasons</span>

                        <Icon icon="iconamoon:arrow-right-2-duotone" width={24}/>
                    </Button>

                    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

                        {animeSeasonsJikan.data && animeSeasonsJikan.data.length ? animeSeasonsJikan.data?.map((item: Anime, index: number) => (
                            <AnimeCard key={item.mal_id} anime={item} index={index}/>)) : ""}
                    </div>
                </section>

                <section className="flex flex-col">
                    <Button className="bg-gradient-primary w-fit text-white p-4 mb-4 capitalize">
                        <span className="mr-2 font-medium text-xl">Anime Schedules</span>
                        <Icon icon="iconamoon:arrow-right-2-duotone" width={24}/>
                    </Button>

                    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {animeSchedulesJikan.data && animeSchedulesJikan.data.length ? animeSchedulesJikan.data?.map((item: Anime, index: number) => (
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


