import { useEffect, useState } from 'react'

export const useFilters = () => {
  const [sort, setSort] = useState(false)
  const [previous, setPrevious] = useState(false)
  const [upcoming, setUpcoming] = useState(false)

  const handleSort = () => setSort(prev => !prev)

  const handlePrevious = () => {
    setPrevious(prev => !prev)
  }

  const handleUpcoming = () => {
    setUpcoming(prev => !prev)
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
