import './BreedImages.css';
import ImageCard from '../ImageCard/ImageCard';


function BreedImages({ chosenImages, selectedBreeds }) {
    const allImages = chosenImages.map((image, index) => {
        return (
            <ImageCard key={index} image={image}/>
        )
    })

    return (
       <section className="image-container">
            {allImages}
        </section>
    )

}

export default BreedImages;