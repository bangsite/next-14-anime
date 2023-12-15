'use server';

import {AnimeCard, AnimeProp} from "@/components/AnimeCard";
import AnimeTopRepository from "@/repositories/animeTopRepository";

export const renderCardAnimes = async (page: number) => {
    const animeRepository = new AnimeTopRepository();

    const data = await animeRepository.getAll({ page: page, limit: 10});

    console.log(data);

    return data.map((item: AnimeProp, index: number) => (
        <AnimeCard key={item.id} anime={item} index={index}/>
));
}
