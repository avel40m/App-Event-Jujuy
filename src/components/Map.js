import MapView, { Marker } from 'react-native-maps'

export const MapComponent = ({ name, locationCoordinates }) => {
  return (
    <MapView
      style={{ height: 250, marginVertical: 20, borderRadius: 10 }}
      initialRegion={{
        latitude: Number(locationCoordinates.latitude),
        longitude: Number(locationCoordinates.longitude),
        latitudeDelta: 0.005,
        longitudeDelta: 0.005
      }}
    >
      <Marker
        coordinate={{
          latitude: Number(locationCoordinates.latitude),
          longitude: Number(locationCoordinates.longitude)
        }}
        title={name}
      />
    </MapView>
  )
}
