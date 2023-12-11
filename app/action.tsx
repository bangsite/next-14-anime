'use server'
import {getListAnimes} from "@/lib/api";

import {AnimeCard, AnimeProp} from "@/components/AnimeCard";
export const fetchAnime = async (page: number) => {
    const data = await getListAnimes(page);
    console.log(data);

    return data.map((item: AnimeProp, index: number) => (
        <AnimeCard key={item.id} anime={item} index={index}/>
    ));
}
