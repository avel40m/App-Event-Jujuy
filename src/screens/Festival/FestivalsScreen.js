import { useEffect, useState } from 'react'
import { FlatList, Image, Pressable, SafeAreaView, Text, View } from 'react-native'
import { getFestivalsList } from '../../api/festivals.api'
import { styles } from './FestivalsScreen.styles'

const previousList = [1, 2, 3, 4, 5, 6]

export const FestivalsScreen = ({ navigation }) => {
  const [eventList, setFestivalList] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getFestivalsList()
      .then((data) => setFestivalList(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [])

  const renderEvent = ({ item }) => {
    const { name, place, date, images } = item

    return (
      <Pressable onPress={() => navigation.navigate('FestivalDetail', { item })}>
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
            data={previousList}
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
