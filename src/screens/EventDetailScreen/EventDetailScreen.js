import { View, Text, StyleSheet, StatusBar, ScrollView, Dimensions, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { styles } from './eventdetailsscreen.styles';

export const EventDetailScreen = ({ route }) => {
    const { item } = route.params
    return (
        <ScrollView style={styles.container}>
            <View style={styles.imageContainer}>
                <ScrollView horizontal pagingEnabled style={styles.imageContainer}>
                    {
                        item.images.map((image, index) => (
                            <Image
                                key={index}
                                source={{ uri: image }}
                                style={styles.image}
                                resizeMode='cover'
                            />
                        ))
                    }
                </ScrollView>
            </View>
            <View style={styles.textContainer}>
                <Text style={item.name.length < 40 ? styles.textTitleCorto : styles.textTitleLargo}>{item.name}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
            <View style={styles.location}>
                <View style={styles.lugar}>
                    <Entypo name="location" size={24} color="red" />
                    <Text style={styles.locationTitle}>{item.place}</Text>
                </View>
                <View style={styles.hours}>
                    <View style={styles.timer}>
                        <MaterialIcons name="timer" size={22} color="black" />
                        <Text>{item.time}</Text>
                    </View>
                    <View style={styles.timer}>
                        <Fontisto name="date" size={18} color="black" />
                        <Text>{item.date}</Text>
                    </View>
                </View>
            </View>

      
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: Number(item.locationCoordinates.latitude),
                    longitude: Number(item.locationCoordinates.longitude),
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                  }}
            >
                <Marker
                    coordinate={{
                        
                    latitude: Number(item.locationCoordinates.latitude),
                    longitude: Number(item.locationCoordinates.longitude),
                    }}
                    title={item.title}
                />
            </MapView>
        </ScrollView>
    )
}

