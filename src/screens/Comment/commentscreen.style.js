import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderBottomColor: '#8e8e8e',
        alignItems: 'center'
    },
    title: { marginLeft: 15, fontSize: 18, fontWeight: '600' },
    cards: { backgroundColor: '#fff', borderRadius: 8, padding: 16, marginBottom: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.22, shadowRadius: 2.22, elevation: 3 },
    cardsContainer: { width: '100%', height: 50, flexDirection: 'row', margin: 10, alignItems: 'center' },
    carsImage: { width: 40, height: 40 },
    inputs: {
        width: '100%',
        height: 60,
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    textInputs:{width:'80%', marginLeft:10},
    buttons: {marginRight:10, fontSize:14,fontWeight:'600'}
})