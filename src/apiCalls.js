async function getAllBreeds() {
    const response = await fetch(`https://dog.ceo/api/breeds/list/all`)
    if (!response.ok) {
        throw new Error(`An error has occurred: ${response.status}`)
    }
    const allBreeds = await response.json()
    return allBreeds
}

async function getBreedImages(breed) {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/6`)
    if (!response.ok) {
        throw new Error(`An error has occurred: ${response.status}`)
    }
    const breedImages = await response.json()
    return breedImages
}

export {
    getAllBreeds,
    getBreedImages
}