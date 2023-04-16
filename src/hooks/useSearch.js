import { useState } from 'react'

export const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const updateSearch = (query) => setSearchQuery(query)

  const resetSearch = () => setSearchQuery('')

  return { searchQuery, updateSearch, resetSearch }
}
