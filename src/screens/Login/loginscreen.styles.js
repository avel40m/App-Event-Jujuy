import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { COLORS, FONT_SIZE } from '../../util/Theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight
  },
  title: {
    fontSize: FONT_SIZE.lg,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center'
  },
  input: {
    marginTop: 6,
    marginBottom: 6,
    height: 40,
    borderColor: COLORS.borderColor,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    margin: 20
  },
  errorText: {
    color: COLORS.primary,
    marginBottom: 8,
    marginLeft: 20
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 8,
    padding: 2,
    alignItems: 'center',
    margin: 20,
    borderRadius: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  parrafo: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center'
  },
  parrafoTitulo: {
    paddingRight: 10,
    fontSize: 18,
    fontWeight: 'bold'
  },
  parrafoLink: {
    color: 'blue',
    marginTop: 6,
    textDecorationLine: 'underline'
  }
})
