import { StyleSheet } from 'react-native'
import { COLORS } from '../../util/Theme'

export const styles = StyleSheet.create({
  container: {
    height: 50,
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
  text: {
    color: COLORS.text
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  },
  modalContainer: {
    width: '80%',
    backgroundColor: COLORS.white,
    borderRadius: 4
  },
  modalOptionDelete: {
    justifyContent: 'center',
    paddingHorizontal: 16,
    height: 60
  },
  textOption: {
    color: COLORS.primary
  }
})
