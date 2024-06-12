import './BreedSelector.css'
import { getAllBreeds } from '../apiCalls';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

function BreedSelector({ selectedBreeds, setSelectedBreed, resetImages, setError }) {
    const [breedOptions, setOptions] = useState([])
    const [breedObjects, setBreedObjects] = useState([])
    const animatedComponents = makeAnimated()

    useEffect(() => {
        getBreeds()
    }, [])

    useEffect(() => {
        formatOptions()
    }, [breedOptions])

    const getBreeds = async () => {
        try {
            const breeds = await getAllBreeds()
            if (breeds) {
                setOptions(breeds.message)
            }
        } catch (error) {
            setError(error)
        }
    }

    const formatOptions = () => {
       const options =  Object.keys(breedOptions).map(breed => {
            return ({ 
                value: breed, label: breed 
            })
        })
        setBreedObjects(options)
    }

    return (
        <div className="select">
            <Select
                className="select-dropdown"
                defaultValue={selectedBreeds}
                onChange={setSelectedBreed}
                options={breedObjects}
                components={animatedComponents}
                isMulti
                styles={{
                    control: (baseStyles, state) => ({
                        ...baseStyles,
                        width: "20vw",
                        height: "100%",
                        border: "3px solid orange",
                        cursor: "pointer",
                        fontsize: "1em"
                    })
                }}
            />
            <button onClick={resetImages}>Submit</button>
        </div>
    )
}

export default BreedSelector;