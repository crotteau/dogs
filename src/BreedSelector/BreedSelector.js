import './BreedSelector.css'
import { getAllBreeds } from '../apiCalls';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

function BreedSelector({ selectedBreeds, setSelectedBreed, resetImages }) {
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
            console.log(error)
        }
    }

    const formatOptions = () => {
        Object.keys(breedOptions).map(breed => {
            breedObjects.push({ value: breed, label: breed })
        })
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
                        borderColor: state.isFocused ? "blue" : "grey",
                        cursor: "pointer"
                    })
                }}
            />
            <button onClick={resetImages}>Submit</button>
        </div>
    )
}

export default BreedSelector;