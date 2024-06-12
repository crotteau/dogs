import './ImageCard.css';

function ImageCard({image, selectedBreeds}) {
    console.log('image', image)
    return (
        <div className="image-card" style={{image}}>
            {/* <img src={image} alt="dog" /> */}
            <p>dog</p>
        </div>
    )
}

export default ImageCard;