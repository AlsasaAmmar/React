import React, { useState, useEffect } from 'react';
import Joke from './Joke'

const url = "https://official-joke-api.appspot.com/random_joke";

function RandomJoke() {
    const [isLoading, setLoading] = useState(true);
    const [joke, setJoke] = useState({}); 
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(url)
          .then(res => res.json())
          .then(data => {
            setLoading(false)
            setJoke(data)
          })
          .catch(err => {
            console.log("error", err);
            setError(true);
            setLoading(false);
          });
      }, []);
    return (
        <div>
        <h1> Here is a joke for you buddy!</h1>
        {error && <h1>You joke got lost on the way </h1>} 
        {isLoading && <h1>loading...</h1> }
        <Joke joke = {joke}/> 
        </div>
    )
}

export default RandomJoke;
