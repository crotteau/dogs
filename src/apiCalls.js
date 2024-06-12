async function getAllBreeds() {
    const response = await fetch('https://dog.ceo/api/breeds/list/all')
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

async function getRandomBreed() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random/1')
    if (!response.ok) {
        throw new Error(`An error has occurred: ${response.status}`)
    }
    const randomBreeds = await response.json()
    return randomBreeds
}

export {
    getAllBreeds,
    getBreedImages,
    getRandomBreed
}