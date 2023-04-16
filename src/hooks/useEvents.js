import { useEffect, useState } from 'react'
import { getEventList } from '../api/events.api'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
dayjs.extend(customParseFormat)

export const useEvents = ({ searchQuery, sort, previous, upcoming }) => {
  const [eventList, setEventList] = useState([])
  const [loading, setLoading] = useState(false)

  const filteredEvents = eventList.filter(event => {
    const regex = /[\u0300-\u036f]/g
    const eventName = event.name.normalize('NFD').replace(regex, '')
    const query = searchQuery.normalize('NFD').replace(regex, '')
    return eventName.toLowerCase().includes(query.toLowerCase())
  })

  const sortedEvents = sort
    ? filteredEvents.sort((a, b) => {
      const date1 = dayjs(a.date, 'DD/MM/YYYY')
      const date2 = dayjs(b.date, 'DD/MM/YYYY')
      return date1.isBefore(date2) ? -1 : 1
    })
    : filteredEvents

  const previousEvents = previous
    ? sortedEvents.filter(event => {
      const date = dayjs(event.date, 'DD/MM/YYYY')
      return date.isBefore(dayjs())
    })
    : null

  const upcomingEvents = upcoming
    ? sortedEvents.filter(event => {
      const date = dayjs(event.date, 'DD/MM/YYYY')
      return date.isAfter(dayjs())
    })
    : null

  useEffect(() => {
    setLoading(true)
    getEventList()
      .then((data) => setEventList(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [])

  return {
    eventList: previousEvents || upcomingEvents || filteredEvents,
    loading
  }
}
