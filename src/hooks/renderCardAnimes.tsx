'use server';

import {AnimeCard, AnimeProp} from "@/components/AnimeCard";
import AnimeTopJikan from "@/repositories/animeTopJikan";

export const renderCardAnimes = async (page: number) => {
    const animeRepository = new AnimeTopJikan();

    const data = await animeRepository.getAll({ page: page, limit: 10});

    return data.map((item: AnimeProp, index: number) => (
        <AnimeCard key={item.mal_id} anime={item} index={index}/>
));
}
