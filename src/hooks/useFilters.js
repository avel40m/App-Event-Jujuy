import { useEffect, useState } from 'react'

export const useFilters = () => {
  const [sort, setSort] = useState(false)
  const [previous, setPrevious] = useState(false)
  const [upcoming, setUpcoming] = useState(false)

  const handleSort = () => setSort(!sort)

  const handlePrevious = () => {
    setPrevious(!previous)
  }

  const handleUpcoming = () => {
    setUpcoming(!upcoming)
  }

  const resetFilters = () => {
    setSort(false)
    setPrevious(false)
    setUpcoming(false)
  }

  useEffect(() => {
    if (previous) setUpcoming(false)
  }, [previous])

  useEffect(() => {
    if (upcoming) setPrevious(false)
  }, [upcoming])

  return {
    sort,
    previous,
    upcoming,
    handleSort,
    handlePrevious,
    handleUpcoming,
    resetFilters
  }
}
