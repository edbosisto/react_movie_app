import { useEffect, useState } from "react";
import './App.css';
// import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const API_URL = 'https://www.omdbapi.com/?apikey=bb6b6121';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        // Get response from API
        const response = await fetch(`${API_URL}&s=${title}`);
        // Get data from the response
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('best');
    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input 
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src=""
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {/* Check if there are movies to render (from search). If so, render a MovieCard component */}
            {
                movies?.length > 0
                ? (
                    <div className="container">
                        {/* Iterate over the movies and render a MovieCard component for each */}
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }

        </div>
    )
}

export default App;