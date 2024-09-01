import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./TopMovies.module.scss";

const API_KEY = "091e1e530426a81cfa27259a37e1b4be"; 
const API_URL = "https://api.themoviedb.org/3/movie/top_rated";

interface TopMoviesProps {
    count: number;
  }
  
  const TopMovies: React.FC<TopMoviesProps> = ({ count }) => {
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      const fetchTopMovies = async () => {
        try {
          const response = await axios.get(API_URL, {
            params: {
              api_key: API_KEY,
              language: "en-US",
              page: 1,
            },
          });
  
          // Get the top `count` movies
          const topMovies = response.data.results.slice(0, count);
          setMovies(topMovies);
        } catch (error) {
          console.error("Error fetching the top movies", error);
        }
      };
  
      fetchTopMovies();
    }, [count]);
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  
    return (
      <div className={styles.sliderContainer}>
        <Slider {...settings}>
          {movies.map((movie) => (
            <div key={movie.id} className={styles.movieCard}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className={styles.movieImage}
              />
              <div className={styles.movieTitle}>
                <h3>{movie.title}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  
  export default TopMovies;