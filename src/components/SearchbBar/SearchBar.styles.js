import { Dimensions, StyleSheet } from 'react-native'
import { COLORS, SPACING } from '../../util/Theme'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: Dimensions.get('screen').width - 20,
    borderRadius: 20,
    backgroundColor: COLORS.white
  },
  inputText: {
    flex: 1
  }
})
