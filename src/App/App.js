
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import BreedSelector from '../BreedSelector/BreedSelector';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h2>Fetch!</h2>
      </header>
      <BreedSelector />
      {/* <Routes> */}
        {/* <Route path="/" element={<Breeds />}></Route>
        <Route path="/:breed" element={<BreedImages />}></Route>
        <Route path="/:breed/:subBreeds" element={<BreedImages />}></Route> */}
      {/* </Routes> */}
    </div>
  );
}

export default App;
