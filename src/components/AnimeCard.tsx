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
            className="max-w-sm rounded relative w-full">
            <div className="relative w-full h-[32vh]">
                <Image
                    src={`${anime?.images?.jpg?.image_url}`}
                    alt={anime.title}
                    fill
                    className="rounded-xl"
                />
                <div className="absolute left-[0.5rem] bottom-[0.5rem] bg-black/50 text-white font-medium px-2 py-0.5  rounded-xl">
                    <strong>{anime.episodes} ep</strong>
                </div>
                <div className="flex flex-row gap-2 items-center absolute right-[0.5rem] bottom-[0.5rem] bg-black/30 rounded-xl px-2 py-0.5">
                    <Icon icon="solar:star-bold" color="#FFAD49" />
                    <p className="text-base font-bold text-[#FFAD49]">{anime.score}</p>
                </div>
            </div>

            <div className="py-4 flex flex-col">
                <div className="flex justify-between items-center gap-1">
                    <h2 className="font-bold text-xl line-clamp-1 w-full">
                        {anime.title_english}
                    </h2>
                </div>
                <div className="flex items-center justify-between gap-4">

                </div>
            </div>
        </MotionDiv>
    )
}


