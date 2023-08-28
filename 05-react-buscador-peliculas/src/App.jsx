import './App.css'
import { useRef, useState, useEffect, useCallback } from 'react'
import { useMovies } from './hooks/useMovies.js'
import { Movies } from './components/Movies.jsx'
import debounce from 'just-debounce-it'

function useSearch() {
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);
  const isfirstInput = useRef(true);

  useEffect(() => {
    if (isfirstInput.current) {
      isfirstInput.current = search == '';
      return
    }

    if (search == '') {
      setError("No se puede buscar una pelicula vacia");
      return
    }

    if (search.match(/^\d+$/)) {
      setError("No se puede buscar con un numero");
      return
    }

    if (search.length < 3) {
      setError("La busqueda debe tener al menos 3 caracteres");
      return
    }

    setError(null);
  }, [search]);

  return { search, updateSearch: setSearch, error }
}

function App() {
  const [sort, setSort] = useState(false);
  const { search, updateSearch, error } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search, sort });
  const debouncedGetMovies = useCallback(
    debounce(search => {
      console.log({ search });
      getMovies({ search })
    }, 300)
    , [getMovies]
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    getMovies({ search });

    // const { query } = Object.fromEntries(
    //   new window.FormData(event.target)
    // );
    // console.log(query);

    // const filds = new window.FormData(event.target);
    // const query = filds.get('query');
    // const inputEl = inputRef.current;
    // const value = inputEl.value;
    // console.log(value);
  };

  const handleSort = () => {
    setSort(!sort);
  };

  const handleChange = (event) => {
    const newSearch = event.target.value;
    updateSearch(newSearch);
    // getMovies({ search: newSearch });
    debouncedGetMovies(newSearch)
    // if (newQuery.startsWith(' ')) return
  }



  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const filds = new window.FormData(event.target);
  //   const query = filds.get('query');
  //   console.log(query);
  // };

  // <input ref={inputRef} placeholder="Avengers, Start War, The Matrix..." />

  return (
    <div className='page'>
      <h1>Buscador de Peliculas</h1>
      <header>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name='query' placeholder="Avengers, Start War, The Matrix..." />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red', fontWeight: "bold" }}>{error}</p>}
      </header>

      <main>
        {
          loading ? <p>Cargando...</p> : <Movies movies={movies} />
        }

      </main>
    </div>
  )
}

export default App
