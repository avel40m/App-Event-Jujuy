import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
      flex: 1,
      textAlign: 'center',
      justifyContent: 'center',
      marginTop: StatusBar.currentHeight
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
      textAlign: 'center'
    },
     input: {
      marginTop:6,
      marginBottom:6,
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 20,
      paddingHorizontal: 10,
      marginBottom: 5,
      margin:20
    },
    errorText: {
      color: 'red',
      marginBottom:8,
      marginLeft: 20
    },
    button:{
      backgroundColor: 'red',
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginTop: 8,
      padding: 2,
      alignItems: 'center',
      margin: 20,
      borderRadius:20
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
      paddingRight:10,
      fontSize: 18,
      fontWeight: 'bold'
    },
    parrafoLink: {
      color: 'blue',
      marginTop: 6,
      textDecorationLine: 'underline',
    }
  })