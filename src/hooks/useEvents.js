import { useEffect, useState } from 'react'
import { getEventList } from '../api/events.api'

export const useEvents = () => {
  const [eventList, setEventList] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (query) => setSearchQuery(query)

  const filteredEvents = eventList.filter(event => {
    const regex = /[\u0300-\u036f]/g
    const eventName = event.name.normalize('NFD').replace(regex, '')
    const query = searchQuery.normalize('NFD').replace(regex, '')
    return eventName.toLowerCase().includes(query.toLowerCase())
  })

  useEffect(() => {
    setLoading(true)
    getEventList()
      .then((data) => setEventList(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [])

  return { eventList: filteredEvents, loading, handleSearch, searchQuery }
}
