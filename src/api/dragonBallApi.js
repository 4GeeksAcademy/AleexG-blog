export const getPersonajes = async () => {
    const response = await fetch ("https://dragonball-api.com/api/characters")
    return await response.json()
}

export const getPlanets = async () => {
    const response = await fetch ("https://dragonball-api.com/api/planets")
    return await response.json()
} 