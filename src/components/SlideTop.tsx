import React, {useState} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';


import {Button} from "@/components/ui/button";
import {AnimeKitsu} from "@/types/animeKitsu";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface PropSlideTop {
    data: [];
}

export const SlideTop = ({data}: PropSlideTop) => {
    const [watchMovie, setWatchMovie] = useState('');

    const openInNewTab = (url: string) => {
        window.open(url, "_blank", "noreferrer");
    }


    return (
        <div className="container py-6">
            <Swiper
                slidesPerView={1}
                navigation={true}
                modules={[ Navigation, Pagination]}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
            >
                {data && data.length ? (data.map((item: AnimeKitsu) => (
                    <SwiperSlide key={item.id}>
                        <div
                            className="bg-center bg-cover bg-no-repeat relative sm:p-8 py-8 px-4 md:px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-8 gap-0 m-0 min-h-[48vh]"
                            style={{backgroundImage: `url(${item.attributes.coverImage?.large})`}}>
                            {/*<Image src={}></Image>*/}
                            <div
                                className="bg-black/60 absolute left-0 top-0 bottom-0 w-[100%] md:w-[60%] h-full pr-[15px] md:pr-4 pl-[15px] md:pl-[6%] flex flex-col items-center md:items-start justify-center gap-4 md:text-left text-white shadow">
                                <h3 className="sm:text-4xl text-2xl text-white font-bold leading-[120%] red-gradient">
                                    {item.attributes.titles?.en}
                                </h3>
                                <p className="text-white line-clamp-3">{item.attributes.synopsis}</p>
                                <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 md:gap-6">
                                    <p>
                                        <span>Episode: </span>
                                        <span className="text-primary font-extrabold red-gradient">
                                            {item.attributes.episodeCount || item.attributes.episodeLength}
                                        </span>
                                    </p>
                                    <p>
                                        <span className="">Rank: </span>
                                        <span className="text-primary font-extrabold red-gradient">
                                            {item.attributes.ratingRank}
                                        </span>
                                    </p>
                                    <p>
                                        <span className="">Views: </span>
                                        <span className="text-primary font-extrabold red-gradient">
                                            {item.attributes.userCount}
                                        </span>
                                    </p>
                                </div>
                                <Button
                                    onClick={() => openInNewTab(`https://www.youtube.com/watch?v=${item.attributes.youtubeVideoId}`)}>Watch
                                    a movie</Button>
                            </div>


                        </div>
                    </SwiperSlide>

                ))) : ""}
            </Swiper>
        </div>
    )
}
