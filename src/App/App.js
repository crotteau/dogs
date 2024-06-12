
import './App.css';
import BreedSelector from '../BreedSelector/BreedSelector';
import BreedImages from '../BreedImages/BreedImages';
import { useState } from 'react';
import { getBreedImages } from '../apiCalls';

function App() {
  const [selectedBreeds, setSelectedBreed] = useState(null)
  const [chosenImages, setImages] = useState([])
  const [error, setError] = useState(null)

  const getImages = () => {
    selectedBreeds.forEach(async breed => {
      try {
        const images = await getBreedImages(breed.value)
        if (images) {
          setImages(chosenImages => [...chosenImages, images.message])
        }
      } catch (error) {
        setError(error)
      }
    })
  }

  const resetImages = () => {
    setImages([])
    getImages()
    setSelectedBreed(null)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Fetch!</h2>
      </header>
      {error && <h2 className="fetch-error">{error.message}</h2>}
      <BreedSelector
        selectedBreeds={selectedBreeds}
        setSelectedBreed={setSelectedBreed}
        resetImages={resetImages}
        setError={setError}
      />
      <BreedImages chosenImages={chosenImages} selectedBreeds={selectedBreeds} />
    </div>
  );
}

export default App;
