import { useEffect, useState } from 'react'
import { FlatList, Image, Pressable, SafeAreaView, Text, View } from 'react-native'
import { getEventsList } from '../../api/events.api'
import { styles } from './EventsScreen.styles'

export const EventsScreen = () => {
  const [eventList, setEventList] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getEventsList()
      .then((data) => setEventList(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [])

  const renderEvent = ({ item }) => {
    const { name, place, date, images } = item

    return (
      <Pressable>
        <View style={styles.itemContainer}>
          <Image source={{ uri: images[0] }} style={styles.itemImage} />
          <View style={styles.itemContent}>
            <Text style={styles.itemName}>{name}</Text>
            <Text>{place}</Text>
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
      {loading
        ? <FlatList
            data={[...Array(10)]}
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
