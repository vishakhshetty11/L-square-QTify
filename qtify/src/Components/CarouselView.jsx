import React, { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import 'swiper/css';
import "swiper/css/navigation";
import SongCard from "./SongCard";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import styles from "./CarouselView.module.css"
export default function CarouselView({ data, type }) {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <div style={{ position: "relative" }}>
            {/* LEFT ARROW */}
            <div ref={prevRef} className={styles.custom_prev}>
                <NavigateBeforeIcon />
            </div>

            {/* RIGHT ARROW */}
            <div ref={nextRef} className={styles.custom_next}>
                <NavigateNextIcon />
            </div>
            <Swiper
                modules={[Navigation]}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                navigation
                spaceBetween={30}
                slidesPerView={7}>
                {data.map(item => (
                    <SwiperSlide key={item.id}>
                        <SongCard album={item} key={item.id} type={type} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )

}