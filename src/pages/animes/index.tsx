import {ReactElement} from "react";

import RootLayout from "../../layouts/MainLayout";
import {LoadMore} from "@/components/LoadMore";
import AnimeTopRepository from "@/repositories/animeTopRepository";
// import {AnimeCard, AnimeProp} from "@/components/AnimeCard";
import {Anime} from "@/types/anime";
import {AnimeCard} from "@/components/AnimeCard";

export async function getServerSideProps() {
    try {
        const animeRepository = new AnimeTopRepository();
        const {data}: Record<string, any> = await animeRepository.getAll({page: 1, limit: 8});
        console.log(data);

        return {
            props: {
                initialData: data,
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error);

        return {
            props: {
                initialData: null,
            },
        };
    }
}

// @ts-ignore
const Anime = ({initialData}) => {
    return (
        <div className="container mx-auto">
            <div className="sm:py-16 py-6 flex flex-col gap-10">
                <h2 className="text-3xl text-white font-bold">Explore Anime</h2>

                <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                    {initialData ? initialData?.map((item: Anime, index: number) => (
                        <AnimeCard key={item.mal_id} anime={item} index={index}/>)) : ""}
                </section>

                <LoadMore/>
            </div>
        </div>
    )
}


// @ts-ignore
Anime.getLayout = (page: ReactElement) => (
    <RootLayout>
        {page}
    </RootLayout>
)
export default Anime;
