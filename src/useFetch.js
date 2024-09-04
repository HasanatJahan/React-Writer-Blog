import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // associate with specific fetch request 
        const abortCont = new AbortController();

        setTimeout(() => { // added this for ispending simulation
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok) {
                        setError(res.err);
                        setIsPending(false);
                        throw Error("Could not fetch the data from the resource");
                    }
                    return res.json();
                })
                .then(data => {
                    console.log(data);
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    if (err.name === "AbortError") {
                        console.log("fetch aborted");
                    }
                    else {
                        console.log(err.message);
                        setIsPending(false);
                        setError(err.message);
                    }
                })
        }, 500)

        //  return here for cleanup 
        return () => abortCont.abort();

    }, [url]);

    // return value from the custom hook 
    // it can be anything, array, state or boolean 
    return { data, isPending, error }
}

export default useFetch;