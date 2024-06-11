
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import BreedSelector from '../BreedSelector/BreedSelector';
import BreedImages from '../BreedImages/BreedImages';
import { useState, useEffect } from 'react';
import { getBreedImages } from '../apiCalls';

function App() {
  const [selectedBreeds, setSelectedBreed] = useState(null)
  const [chosenImages, setImages] = useState([])

  const getImages = () => {
    console.log('hi', selectedBreeds)
      selectedBreeds.forEach(async breed => {
          try {
              const images = await getBreedImages(breed.value)
              if (images) {
                  console.log('images', images.message)
                  setImages([...chosenImages, images])
              }
          } catch (error) {
              console.log(error)
          }
  })
}

  return (
    <div className="App">
      <header className="App-header">
        <h2>Fetch!</h2>
      </header>
      <BreedSelector selectedBreeds={selectedBreeds} setSelectedBreed={setSelectedBreed} getImages={getImages}/>
      <BreedImages chosenImages={chosenImages} selectedBreeds={selectedBreeds}/>
      {/* <Routes> */}
        {/* <Route path="/" element={<Breeds />}></Route>
        <Route path="/:breed" element={<BreedImages />}></Route>
        <Route path="/:breed/:subBreeds" element={<BreedImages />}></Route> */}
      {/* </Routes> */}
    </div>
  );
}

export default App;
