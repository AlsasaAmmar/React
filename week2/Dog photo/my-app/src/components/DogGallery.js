import React, { useState, useEffect } from 'react';
import DogPhoto from './DogPhoto'; 
import Button from './Button'


const url = "https://dog.ceo/api/breeds/image/random"; 


function DogGallery(){
  
    const [loading, setLoading] = useState(true);
    const [dogPhotos, setDogPhotos] = useState([]); 
    const [error, setError] = useState(false);

  
    const getDogPhoto = ()=> {
      fetch(url)
            .then(res => res.json())
            .then(data => {
              setLoading(false)
              setDogPhotos(dogPhotos.concat(data.message))
            })
            .catch(err => {
              console.log("error", err);
              setError(true);
              setLoading(false);
            })
            .finally (()=> setLoading(false)) 
    }
    return (
      <div>
        {error && <h1>Unable to fetch data</h1>}
        {loading && <p>Press the button to get a cute doggy!</p> }
        <Button handleButton={getDogPhoto} text={"Get me a doggy please!!"}/> 
        <DogPhoto photosUrl={dogPhotos}/>
      </div>

    )
}


export default DogGallery; 