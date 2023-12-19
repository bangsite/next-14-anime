import Image from "next/image";
import {Swiper, SwiperSlide} from 'swiper/react';
import React from "react";
import {Anime} from "@/types/anime";

// Import Swiper styles
import 'swiper/css';

interface PropSlideTop {
    data: [];
}

export const SlideTop = ({data}: PropSlideTop) => {
    return (
        <div className="container py-6">
            <Swiper
                spaceBetween={15}
                slidesPerView={2}
                onSlideChange={() => console.log('slide change')}
            >
                {data && data.length ? (data.map((item: Anime, index: number) => (
                    <SwiperSlide key={index} >
                        <div
                            className="bg-center bg-cover bg-no-repeat sm:p-8 py-8 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-8 gap-0 m-0 min-h-[48vh]"
                            style={{backgroundImage: `url(${item?.images?.jpg?.large_image_url})`}}>
                            <h3 className="sm:text-4xl text-2xl text-white font-bold leading-[120%]">
                                {item.title_english || item.title} <span
                                className="red-gradient">Diverse Realms</span> of
                                Anime Magic
                            </h3>

                        </div>
                    </SwiperSlide>

                ))) : ""}
            </Swiper>
        </div>
    )
}
