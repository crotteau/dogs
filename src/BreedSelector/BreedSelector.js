import './BreedSelector.css'
import { getAllBreeds } from '../apiCalls';
import { useEffect, useState } from 'react';
import Select from 'react-select';

function BreedSelector() {
    const [breedOptions, setOptions] = useState([])
    const [breedObjects, setBreedObjects] = useState([])
    const [selectionOption, setSelectedBreed] = useState(null)

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
                console.log('breeds', breeds.message)
                setOptions(breeds.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const formatOptions = () => {
        Object.keys(breedOptions).map(breed => {
            breedObjects.push({value: breed, label: breed})
        })
    }

    return (
        <div className='select'>
            <Select
                defaultValue={selectionOption}
                onChange={setSelectedBreed}
                options={breedObjects}
                isMulti
                styles={{
                    control: (baseStyles, state) => ({
                        ...baseStyles,
                        width: '20vw',
                        borderColor: state.isFocused ? 'blue' : 'grey',
                        cursor: 'pointer'
                    })
                }}
            />
        </div>
    )
}

export default BreedSelector;