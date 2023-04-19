import { Image, Pressable, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { styles } from './Card.styles'

export const Card = ({ item, to, navigation }) => {
  const { name, place, date, images } = item

  return (
    <Pressable onPress={() => navigation.navigate(to, { item })}>
      <View style={styles.itemContainer}>
        <Image source={{ uri: images[0] }} style={styles.itemImage} />
        <LinearGradient
          colors={['transparent', 'rgba(0, 0, 0, 0.8)']}
          style={styles.itemContent}
        >
          <Text style={styles.itemName}>{name}</Text>
          <Text style={styles.itemPlace}>{place}</Text>
        </LinearGradient>
        <Text style={styles.itemDate}>{date}</Text>
      </View>
    </Pressable>
  )
}

export const SkeletonCard = () => (
  <View style={styles.itemContainer}>
    <Image style={styles.itemImage} />
    <View style={styles.itemContent}>
      <View style={styles.itemSkeletonName} />
      <View style={styles.itemSkeletonPlace} />
    </View>
  </View>
)
