import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import {AnimeCard} from "./AnimeCard";

export const AnimeTopCarousel = ({data}: [] | any) => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {data ? (data.map((item, index) => (
                <SwiperSlide key={index}>
                    <AnimeCard key={item.mal_id} anime={item} index={index}/>))
                </SwiperSlide>

            ))) : ""}

        </Swiper>

    )
}
