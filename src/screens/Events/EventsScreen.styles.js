import { StyleSheet, StatusBar, Dimensions } from 'react-native'
import { COLORS, FONT_SIZE, SPACING } from '../../util/Theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: COLORS.grey
  },
  list: {
    padding: 10
  },
  itemContainer: {
    flex: 1,
    width: Dimensions.get('screen').width - 20,
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: SPACING.md,
    backgroundColor: COLORS.white,
    elevation: 3,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2
  },
  itemContent: {
    padding: 20,
    position: 'relative'
  },
  itemImage: {
    height: 200,
    width: '100%',
    resizeMode: 'cover',
    backgroundColor: COLORS.inactive
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: SPACING.sm
  },
  itemSkeletonName: {
    marginBottom: SPACING.md,
    backgroundColor: COLORS.inactive,
    height: FONT_SIZE.lg,
    width: '100%',
    borderRadius: 5
  },
  itemSkeletonPlace: {
    backgroundColor: COLORS.inactive,
    height: 14,
    width: '100%',
    borderRadius: 5
  },
  itemDate: {
    backgroundColor: COLORS.primary,
    color: COLORS.white,
    position: 'absolute',
    top: -40,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  }
})
