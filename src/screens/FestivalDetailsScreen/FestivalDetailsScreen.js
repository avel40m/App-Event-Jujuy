import { Entypo, Fontisto, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { Button, Image, ScrollView, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { UserContext } from '../../contexts/UserContext';
import { styles } from '../Festival/FestivalScreen.style';

export const FestivalDetailScreen = ({ route }) => {
    const { item } = route.params
    const navigation = useNavigation();
    const { currentUser } = useContext(UserContext);

    return (
        <ScrollView >
            <View >
                <ScrollView horizontal pagingEnabled >
                    {
                        item.images.map((image, index) => (
                            <Image
                                key={index}
                                source={{ uri: image }}
                                resizeMode='cover'
                            />
                        ))
                    }
                </ScrollView>
            </View>
            <View style={styles.itemContainer}>
                <Text >{item.name}</Text>
                <Text >{item.description}</Text>
            </View>
            <View >
                <View >
                    <Entypo name="location" size={24} color="red" />
                    <Text >{item.place}</Text>
                </View>
                <View >
                    <View >
                        <MaterialIcons name="timer" size={22} color="black" />
                        <Text>{item.time}</Text>
                    </View>
                    <View >
                        <Fontisto name="date" size={18} color="black" />
                        <Text>{item.date}</Text>
                    </View>
                </View>
                {
                    currentUser &&
                    <View>
                        <Button
                            title='Ver comentarios'
                            onPress={() => navigation.navigate('Comment', { name: item.name })}
                        />
                    </View>
                }
            </View>


            <MapView
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
