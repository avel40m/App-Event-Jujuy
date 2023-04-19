import { FlatList, SafeAreaView, Text, View } from 'react-native'
import { styles } from './FestivalsScreen.styles'
import { Card, SkeletonCard } from '../../components/Card/Card'
import { SearchBar } from '../../components/SearchbBar/SearchBar'
import { useSearch } from '../../hooks/useSearch'
import { useFestivals } from '../../hooks/useFestivals'

const previousList = [1, 2, 3, 4, 5, 6]

export const FestivalsScreen = ({ navigation }) => {
  const { searchQuery, updateSearch, resetSearch } = useSearch()
  const { festivalList, loading } = useFestivals({ searchQuery })

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        handleSearch={updateSearch}
        searchQuery={searchQuery}
        resetSearchQuery={resetSearch}
      />
      <View style={styles.bar}>
        <Text style={styles.text}>{festivalList.length} resultados</Text>
      </View>
      {loading
        ? <FlatList
            data={previousList}
            renderItem={SkeletonCard}
            keyExtractor={item => item}
            style={styles.list}
          />
        : <FlatList
            data={festivalList}
            renderItem={({ item }) =>
              <Card
                item={item}
                to='FestivalDetail'
                navigation={navigation}
              />}
            keyExtractor={(item) => item.id}
            style={styles.list}
          />}
    </SafeAreaView>
  )
}
