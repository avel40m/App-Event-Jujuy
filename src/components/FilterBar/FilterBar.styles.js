import { StyleSheet } from 'react-native'
import { COLORS } from '../../util/Theme'

export const styles = StyleSheet.create({
  container: {
    height: 40,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    elevation: 3,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2
  },
  flexItem: {
    color: COLORS.text
  }
})
