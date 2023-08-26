import { useState, useEffect } from 'react';
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
const CAT_PREFIX_IMAGE_URL = `https://cataas.com`;
const CAT_ENDPOINT_IMAGE_URL = (FirstWords) => `https://cataas.com/cat/says/${FirstWords}?size=50&color=red&json=true`;
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`;

export const App = () => {

    const [fact, setFact] = useState();
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => {
                const { fact } = data
                setFact(fact)
            })
    }, []);

    useEffect(() => {
        if (!fact) return;

        const threeFirstWords = fact.split(' ', 1).join(" ");

        fetch(CAT_ENDPOINT_IMAGE_URL(threeFirstWords))
            .then(res => res.json())
            .then(response => {
                const { url } = response;
                setImageUrl(url);
            })

    }, [fact]);

    // useEffect(() => {
    //     fetch(CAT_ENDPOINT_RANDOM_FACT)
    //         .then(res => res.json())
    //         .then(data => {
    //             const { fact } = data
    //             setFact(fact)

    //             const threeFirstWords = fact.split(' ', 1).join(" ");

    //             fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
    //                 .then(res => res.json())
    //                 .then(response => {
    //                     const { url } = response;
    //                     setImageUrl(url);
    //                 })
    //         })
    // }, []);

    return (
        <main className='main-App'>
            <h1>Hola mundo</h1>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image extracted using the first rhee words for`} />}
        </main>
    );
}