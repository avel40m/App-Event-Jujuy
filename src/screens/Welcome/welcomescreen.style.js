import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { FONT_SIZE } from '../../util/Theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    backgroundColor: 'black',
    padding: 50,
    color: 'white',
    fontSize: FONT_SIZE.lg,
    opacity: 0.8
  },
  logout: {
    backgroundColor: 'red',
    marginTop: 12,
    padding: 10,
    borderRadius: 20
  },
  textLogout: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: FONT_SIZE.md
  }
})
