'use client';

import { useEffect, useState } from 'react';
import './index.scss'
import axios from 'axios';
import MovieCard from '../MovieCard';
import { Movie } from '@/types/movies';
import ReactLoading from 'react-loading';



export default function MovieList() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        getMovies();
    }, []);

    const getMovies = async () => {
        await axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: 'fb4919fb63986f43e77b37fc238b72ef',
                language: 'pt-BR'
            }
        }).then(response => {
            setMovies(response.data.results);

        });

  
    }

 

    return (
        <ul className="movie-list">
            {movies.map((movie) =>
                <MovieCard
                    key={movie.id}
                    movie={movie}
                />
            )}
        </ul>
    );

}