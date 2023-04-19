import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { COLORS, FONT_SIZE } from '../../util/Theme'

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
    backgroundColor: COLORS.black,
    padding: 50,
    color: COLORS.white,
    fontSize: FONT_SIZE.lg,
    opacity: 0.8
  },
  logout: {
    backgroundColor: COLORS.primary,
    marginTop: 12,
    padding: 10,
    borderRadius: 20
  },
  textLogout: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: FONT_SIZE.md
  }
})
