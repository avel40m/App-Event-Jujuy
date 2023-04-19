import { useEffect, useState } from 'react'
import { getFestivalsList } from '../api/festivals.api'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
dayjs.extend(customParseFormat)

export const useFestivals = ({ searchQuery }) => {
  const [festivalList, setFestivalList] = useState([])
  const [loading, setLoading] = useState(false)

  const filteredFestivals = festivalList.filter(event => {
    const regex = /[\u0300-\u036f]/g
    const eventName = event.name.normalize('NFD').replace(regex, '')
    const query = searchQuery.normalize('NFD').replace(regex, '')
    return eventName.toLowerCase().includes(query.toLowerCase())
  })

  useEffect(() => {
    setLoading(true)
    getFestivalsList()
      .then((data) => setFestivalList(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [])

  return {
    festivalList: filteredFestivals,
    loading
  }
}
