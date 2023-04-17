import { StyleSheet } from 'react-native'
import { COLORS } from '../../util/Theme'

export const styles = StyleSheet.create({
  modalOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    paddingHorizontal: 16,
    borderBottomWidth: 0.5,
    borderColor: COLORS.inactive
  }
})
