import { FlatList, Image, Pressable, SafeAreaView, Text, View } from 'react-native'
import { styles } from './EventsScreen.styles'
import { SearchBar } from '../../components/SearchbBar/SearchBar'
import { FilterBar } from '../../components/FilterBar/FilterBar'
import { useEvents } from '../../hooks/useEvents'

const list = [1, 2, 3, 4, 5, 6]

export const EventsScreen = ({ navigation }) => {
  const { eventList, loading, handleSearch, searchQuery } = useEvents()

  const renderEvent = ({ item }) => {
    const { name, place, date, images } = item

    return (
      <Pressable onPress={() => navigation.navigate('EventDetail', { item })}>
        <View style={styles.itemContainer}>
          <Image source={{ uri: images[0] }} style={styles.itemImage} />
          <View style={styles.itemContent}>
            <Text style={styles.itemName}>{name}</Text>
            <Text style={styles.itemPlace}>{place}</Text>
            <Text style={styles.itemDate}>{date}</Text>
          </View>
        </View>
      </Pressable>
    )
  }

  const renderSkeleton = () => (
    <View style={styles.itemContainer}>
      <Image style={styles.itemImage} />
      <View style={styles.itemContent}>
        <View style={styles.itemSkeletonName} />
        <View style={styles.itemSkeletonPlace} />
      </View>
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar handleSearch={handleSearch} searchQuery={searchQuery} />
      <FilterBar eventList={eventList} />
      {loading
        ? <FlatList
            data={list}
            renderItem={renderSkeleton}
            keyExtractor={item => item}
            style={styles.list}
          />
        : <FlatList
            data={eventList}
            renderItem={renderEvent}
            keyExtractor={(item) => item.id}
            style={styles.list}
          />}
    </SafeAreaView>
  )
}
