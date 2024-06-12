import './BreedImages.css';
import { useState, useEffect } from 'react';
import dog from '../assets/dog.png';

function BreedImages({ chosenImages, selectedBreeds }) {
    const [allImages, setAllImages] = useState([])

    useEffect(() => {
        if (chosenImages.length > 0) {
            setAllImages([])
            displayImages()
        }
    }, [chosenImages])

    const displayImages = () => {
        chosenImages.forEach(breed => {
            const images = breed.map((image) => {
                const breedName = image.split('/')
                return (
                    <div className="breed-card" style={{ backgroundImage: `url(${image})` }} key={image}>
                        <p className="breed-name hidden">{breedName[4]}</p>
                    </div>
                )
            })
            setAllImages(allImages => [...allImages, images])
        })
    }
    if (chosenImages.length === 0) {
        return (
            <section className="image-container-none">
                <p className="image-container-prompt">Hey there! Select some breeds to view more!</p>
                <img src={dog} alt="stern-dog" style={{ width: "20vw", height: "40vh" }}></img>
            </section>
        )
    }
    return (
        <section className="image-container">
            {allImages}
        </section>
    )
}

export default BreedImages;
