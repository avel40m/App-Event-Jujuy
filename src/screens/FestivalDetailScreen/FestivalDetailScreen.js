import { View, Text, ScrollView, Image, Button } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { Entypo, MaterialIcons, Fontisto } from '@expo/vector-icons'

import { styles } from './FestivalDetailScreen.style'
import { useNavigation } from '@react-navigation/native'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'

export const FestivalDetailScreen = ({ route }) => {
  const { item } = route.params
  const navigation = useNavigation()
  const { currentUser } = useContext(UserContext)

  console.log(item)

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <ScrollView horizontal pagingEnabled style={styles.imageContainer}>
          {item.images.map((image, index) => (
            <Image
              key={index}
              source={{ uri: image }}
              style={styles.image}
              resizeMode='cover'
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.textContainer}>
        <Text style={item.name.length < 40 ? styles.textTitleCorto : styles.textTitleLargo}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <View style={styles.location}>
        <View style={styles.lugar}>
          <Entypo name='location' size={24} color='red' />
          <Text style={styles.locationTitle}>{item.place}</Text>
        </View>
        <View style={styles.hours}>
          <View style={styles.timer}>
            <MaterialIcons name='timer' size={22} color='black' />
            <Text>{item.time}</Text>
          </View>
          <View style={styles.timer}>
            <Fontisto name='date' size={18} color='black' />
            <Text>{item.date}</Text>
          </View>
        </View>
        {currentUser &&
          <View>
            <Button
              title='Ver comentarios'
              onPress={() => navigation.navigate('Comment', { name: item.name })}
            />
          </View>}
      </View>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: Number(item.locationCoordinates.latitude),
          longitude: Number(item.locationCoordinates.longitude),
          latitudeDelta: 0.005,
          longitudeDelta: 0.005
        }}
      >
        <Marker
          coordinate={{
            latitude: Number(item.locationCoordinates.latitude),
            longitude: Number(item.locationCoordinates.longitude)
          }}
          title={item.name}
        />
      </MapView>
    </ScrollView>
  )
}
