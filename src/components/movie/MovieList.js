import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { SwiperSlide, Swiper } from "swiper/react";

import useSWR from 'swr';
import { fetcher } from '../../config';
// https://api.themoviedb.org/3/movie/now_playing?api_key=8260c6417570893e43797fcb2bf3c3fc
const MovieList = ({type = "now_playing"}) => {
    
    const { data, error } = useSWR(`https://api.themoviedb.org/3/movie/${type}?api_key=8260c6417570893e43797fcb2bf3c3fc`, fetcher);
    
    const movies = data?.results || [];
    return (
        <div className="movie-list">
          <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
            {movies.length > 0 && movies.map(item => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item}></MovieCard>
            </SwiperSlide>
            ))}
          </Swiper>
        </div>
    );
};

export default MovieList;