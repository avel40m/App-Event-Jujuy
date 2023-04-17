const FESTIVALS_ENDPOINT = 'https://64346adc582420e2317bdce4.mockapi.io/api/festivals'

export const getFestivalsList = async () => {
    try {
        const response = await fetch(FESTIVALS_ENDPOINT)
        const json = await response.json()
        return json
    } catch (error) {
        console.warn(`Error: ${error}`)
    }
}
