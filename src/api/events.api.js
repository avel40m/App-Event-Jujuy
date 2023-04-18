const EVENTS_ENDPOINT = 'https://64317d29d4518cfb0e62994e.mockapi.io/jujuyevents/api/v1/events'

export const getEventList = async () => {
  try {
    const response = await fetch(EVENTS_ENDPOINT)
    const json = await response.json()
    return json
  } catch (error) {
    console.warn(`Error: ${error}`)
  }
}
