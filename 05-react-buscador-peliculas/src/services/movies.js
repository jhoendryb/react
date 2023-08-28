const API_KEY = "173c2c2d";
export async function searchMovies({ search }) {

    if (search == '') return null;

    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`);
        const json = await response.json();

        const movies = json.Search;

        return movies?.map((movie) => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster
        }))
    } catch (e) { 
        throw new Error('Error searching movies');
    }

    // if (search) {
    //     // setResponseMovies(widthResults);
    //     return fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
    //         .then(res => res.json())
    //         .then(json => {
    //             setResponseMovies(json);
    //         });
    // } else {
    //     setResponseMovies(withoutResults);
    // }
}