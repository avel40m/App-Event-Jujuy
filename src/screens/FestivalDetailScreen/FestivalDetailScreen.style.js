import { Dimensions, StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
    imageContainer: {
        height: 300,
    },
    image: {
        width: Dimensions.get("screen").width
    },
    textContainer: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textTitleCorto: {
        fontSize: 22,
        fontWeight: '700',
        color: '#070A52'
    },
    textTitleLargo: {
        fontSize: 18,
        fontWeight: '700',
        color: '#070A52'
    },
    description: {
        marginTop: 12,
        fontSize: 14,
        textAlign: 'justify',
        width: 270
    },
    location: {
        flexDirection: 'column',
        marginTop: 22,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 24
    },
    lugar: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 2
    },
    locationTitle: {
        fontSize: 18,
        fontWeight: '500',
        color: 'gray'
    },
    hours: {
        flexDirection: 'row',
        gap: 70
    },
    timer: {
        flexDirection: 'row',
        gap: 10
    },
    map: {
        height: 250,
        marginVertical: 20,
        borderRadius: 10
    }
})