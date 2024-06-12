
import './App.css';
import BreedSelector from '../BreedSelector/BreedSelector';
import BreedImages from '../BreedImages/BreedImages';
import { useState, useEffect } from 'react';
import { getBreedImages } from '../apiCalls';

function App() {
  const [selectedBreeds, setSelectedBreed] = useState(null)
  const [chosenImages, setImages] = useState([])

  const getImages = () => {
    selectedBreeds.forEach(async breed => {
      try {
        const images = await getBreedImages(breed.value)
        if (images) {
          setImages(chosenImages => [...chosenImages, images.message])
        }
      } catch (error) {
        console.log(error)
      }
    })
  }

  const resetImages = () => {
    console.log('before rest', chosenImages)
    setImages([])
    console.log('after reset', chosenImages)
    getImages()
    setSelectedBreed(null)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Fetch!</h2>
      </header>
      <BreedSelector selectedBreeds={selectedBreeds} setSelectedBreed={setSelectedBreed} resetImages={resetImages} />
      <BreedImages chosenImages={chosenImages} selectedBreeds={selectedBreeds} />
    </div>
  );
}

export default App;
