import { useCatImage } from './hooks/useCatImage.js';
import { useCatFact } from './hooks/useCatFact.js';
import { Otro } from './Components/Otro.jsx';
import './App.css'



export const App = () => {

    const { fact, refreshFact } = useCatFact();
    const { imageUrl } = useCatImage({ fact });

    const handleClick = async () => {
        refreshFact();
    };

    return (
        <main className='main-App'>
            <h1>Hola mundo</h1>

            <button onClick={handleClick}>Get new fact</button>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={`Image extracted using the first rhee words for`} />}

        </main>
    );
}