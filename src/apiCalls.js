async function getAllBreeds() {
    const response = await fetch(`https://dog.ceo/api/breeds/list/all`)
    if (!response.ok) {
        throw new Error(`An error has occurred: ${response.status}`)
    }
    const allBreeds = await response.json()
    return allBreeds
}

export {
    getAllBreeds
}