import { StyleSheet, Dimensions } from 'react-native'
import { COLORS } from '../../util/Theme'

export const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    height: 250,
    width: Dimensions.get('screen').width - 20,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    backgroundColor: COLORS.white,
    elevation: 3,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    position: 'relative'
  },
  itemContent: {
    height: '100%',
    width: '100%',
    padding: 20,
    position: 'absolute',
    justifyContent: 'flex-end'
  },
  itemImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover'
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: COLORS.white
  },
  itemPlace: {
    color: COLORS.white
  },
  itemSkeletonName: {
    marginBottom: 10,
    backgroundColor: COLORS.inactive,
    height: 25,
    width: '100%',
    borderRadius: 5
  },
  itemSkeletonPlace: {
    backgroundColor: COLORS.inactive,
    height: 15,
    width: '100%',
    borderRadius: 5
  },
  itemDate: {
    backgroundColor: COLORS.primary,
    color: COLORS.white,
    position: 'absolute',
    top: 10,
    left: 10,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10
  }
})
