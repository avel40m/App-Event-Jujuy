import { StyleSheet, StatusBar, Dimensions } from 'react-native'
import { COLORS } from '../../util/Theme'

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
        marginBottom: 20,
        backgroundColor: COLORS.white,
        elevation: 3,
        shadowColor: '#000',
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
        marginBottom: 10
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
        top: -40,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    }
})