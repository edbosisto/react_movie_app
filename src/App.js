import React from "react";
import { useEffect } from "react";

// const API_KEY = 'bb6b6121';
const API_URL = 'https://www.omdbapi.com/?apikey=bb6b6121';



const App = () => {

    const searchMovies = async (title) => {
        // Get response from API
        const response = await fetch(`${API_URL}&s=${title}`);
        // Get data from the response
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('Batman');
    }, []);

    return (
        <h1>MovieLand</h1>
    )
}

export default App;