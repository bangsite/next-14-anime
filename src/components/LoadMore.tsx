'use client'

import Image from "next/image";
import {useInView} from "react-intersection-observer";
import {useEffect, useState} from "react";
import AnimeTopJikan from "@/repositories/animeTopJikan";
import {Anime} from "@/types/anime";
import {AnimeCard} from "@/components/AnimeCard";

let page = 2;

// export type AnimeCard = JSX.Element;

export const LoadMore = () => {
    const {ref, inView} = useInView();
    const [data, setData] = useState<Anime[]>([]);

    useEffect(() => {
        const animeRepository = new AnimeTopJikan();
        const fetchNextPageData = async () => {
            const {data}:Record<string, any> = await animeRepository.getAll({page: page, limit: 8});

            if (inView) {
                setData((prevData) => [...prevData, ...data]);
                page++;
            }
        }

        fetchNextPageData();
    }, [inView, data])
    return (
        <>
            <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
                {data?.map((item: Anime, index: number) => (<AnimeCard key={item.mal_id} anime={item} index={index}/>))}
            </section>

            <section className="flex justify-center items-center w-full">
                <div ref={ref}>
                    <Image
                        src="./spinner.svg"
                        alt="spinner"
                        width={56}
                        height={56}
                        className="object-contain"
                    />
                </div>
            </section>
        </>
    )
}
