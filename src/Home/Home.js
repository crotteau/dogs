import './Home.css';
import { getRandomBreed } from '../apiCalls';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home({ setError }) {
    const [homeImage, setImage] = useState(null)

    useEffect(() => {
        displayHomeImage()
    }, [])

    const displayHomeImage = async () => {
        try {
            const breeds = await getRandomBreed()
            if (breeds) {
                setImage(breeds.message)
            }
        } catch (error) {
            setError(error)
        }
    }

    return (
        <section className="home">
            <h2>Welcome! View all your favorite dogs breeds.</h2>
            <Link to="/search" className="start-search">Start Searching</Link>
            <img src={homeImage} alt="dog" style={{ maxWidth: "60vw" }}></img>
        </section>
    )
}

export default Home;