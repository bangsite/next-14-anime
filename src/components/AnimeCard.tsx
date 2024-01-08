import Image from "next/image";
import {MotionDiv} from "./MotionDiv";
import {Anime} from "@/types/anime";
import {Icon} from "@iconify/react";

interface Prop {
    anime: Anime;
    index: number;
}

const variants = {
    hidden: {opacity: 0},
    visible: {opacity: 1},
}

export const AnimeCard = ({anime, index}: Prop) => {
    return (
        <MotionDiv
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{
                delay: index * 0.25,
                ease: 'easeInOut',
                duration: 0.5
            }}
            viewport={{amount: 0}}
            className="rounded relative w-full">
            <div className="cursor-pointer relative w-full h-[350px] xs:h-[30vh] sm:h-[32vh] overflow-hidden group rounded-xl">
                <picture>
                    <Image
                        src={`${anime?.images?.webp?.image_url}`}
                        alt={anime.title}
                        fill
                        className="rounded-xl group-hover:scale-105 duration-300"
                    />
                </picture>

                <div
                    className="absolute left-[0.5rem] bottom-[0.5rem] bg-black/60 text-white font-extralight px-2 py-0.5 rounded-xl">
                    {anime.episodes || 0} ep
                </div>
                <div
                    className="flex flex-row gap-1 items-center absolute right-[0.5rem] bottom-[0.5rem] bg-black/60 rounded-xl px-2 py-0.5">
                    <Icon icon="fluent:star-28-filled" color="#FFAD49" width={19}/>
                    <span className="font-extralight text-base text-yellow-600">{anime.score || '0.0'}</span>
                </div>
            </div>

            <div className="py-2 xs:py-4 flex flex-col">
                <div className="flex justify-between items-center gap-1">
                    <h2 className="font-bold text-xl line-clamp-1 w-full">
                        {anime.title_english || anime.title}
                    </h2>
                </div>
                <div className="flex items-center justify-between gap-4">

                </div>
            </div>
        </MotionDiv>
    )
}


