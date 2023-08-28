const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
export const getRandomFact = async () => {
    const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    const data = await res.json();
    const { fact } = data
    return fact
};

// fetch(CAT_ENDPOINT_RANDOM_FACT) // PROMISE
//     .then(res => res.json()) // PROMISE
//     .then(data => {
//         const { fact } = data
//         return fact
//     })