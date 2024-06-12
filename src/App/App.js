import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import BreedSelector from '../BreedSelector/BreedSelector';
import BreedImages from '../BreedImages/BreedImages';
import Home from '../Home/Home';
import { useState, useEffect } from 'react';
import { getBreedImages, getRandomBreeds } from '../apiCalls';

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
      <BrowserRouter>
        <header className="App-header">
          <NavLink to="/" className="App-name">Fetch!</NavLink>
        </header>
        {error && <h2 className="fetch-error">{error.message}</h2>}
        <Routes>
          <Route path="/" element={<Home setError={setError} />} />
          <Route path="/search" element={[
            <BreedSelector
              selectedBreeds={selectedBreeds}
              setSelectedBreed={setSelectedBreed}
              resetImages={resetImages}
              setError={setError}
            />,
            <BreedImages
              chosenImages={chosenImages}
              selectedBreeds={selectedBreeds}
            />
          ]}
          />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
