import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { styles } from './welcomescreen.style';
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export const WelcomeScreen = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const handleLogout = () => {
    setCurrentUser(null);
  }
    return (
        <View style={styles.container}>
          <ImageBackground 
          source={require('../../../assets/image/pumamarca.jpeg')} 
          resizeMode="cover" 
          style={styles.image}>
            <Text style={styles.title}>Bienvenido {currentUser.username}</Text>
            <TouchableOpacity style={styles.logout}>
              <Text style={styles.textLogout} onPress={handleLogout}>Cerrar Session</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      )
}