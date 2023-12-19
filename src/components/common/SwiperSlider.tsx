import React from 'react';

import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import {AnimeCard} from "@/components/AnimeCard";
import {Anime} from "@/types/anime";

export const SwiperSlider = ({data}: [] | any) => {

    // @ts-ignore
    // @ts-ignore
    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {data ? (data.map((item: Anime, index: number) => (
                <SwiperSlide key={index}>
                    <AnimeCard key={item.mal_id} anime={item} index={index}/>))
                </SwiperSlide>

            ))) : ""}

        </Swiper>

    )
}
