import { FlatList, SafeAreaView } from 'react-native'
import { styles } from './EventsScreen.styles'
import { SearchBar } from '../../components/SearchbBar/SearchBar'
import { FilterBar } from '../../components/FilterBar/FilterBar'
import { useEvents } from '../../hooks/useEvents'
import { useSearch } from '../../hooks/useSearch'
import { useFilters } from '../../hooks/useFilters'
import { Card, SkeletonCard } from '../../components/Card/Card'

const previousList = [1, 2, 3, 4, 5, 6]

export const EventsScreen = ({ navigation }) => {
  const { sort, previous, upcoming, handleSort, handlePrevious, handleUpcoming, resetFilters } = useFilters()
  const { searchQuery, updateSearch, resetSearch } = useSearch()
  const { eventList, loading } = useEvents({ searchQuery, sort, previous, upcoming })

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        handleSearch={updateSearch}
        searchQuery={searchQuery}
        resetSearchQuery={resetSearch}
      />
      <FilterBar
        handleSort={handleSort}
        handlePrevious={handlePrevious}
        handleUpcoming={handleUpcoming}
        resetFilters={resetFilters}
        filters={{ sort, previous, upcoming }}
        eventList={eventList}
      />
      {loading
        ? <FlatList
            data={previousList}
            renderItem={SkeletonCard}
            keyExtractor={item => item}
            style={styles.list}
          />
        : <FlatList
            data={eventList}
            renderItem={({ item }) =>
              <Card
                item={item}
                to='EventDetail'
                navigation={navigation}
              />}
            keyExtractor={(item) => item.id}
            style={styles.list}
          />}
    </SafeAreaView>
  )
}
