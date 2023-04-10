import { Controller, useForm } from "react-hook-form";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from './loginscreen.styles';
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigation } from "@react-navigation/native";
import { getUsers } from "../../api/users.api";

export const LoginScreen = () => {
    const { setCurrentUser } = useContext(UserContext);
    const navigation = useNavigation();
    const {control,handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
          username: '',
          password: ''
        }
      });
      const handleLogin = ({username, password}) => {
        getUsers()
        .then(users => {
          const user = users[0]
          if (username === user.username && password === user.password) {
            setCurrentUser({ username, password })
            navigation.navigate('Home')
          } else {
            Alert.alert('Usuario incorrecto','Chequee los datos nuevamente');
          }
        })
        .catch(err => console.warn(err))
      }
      return (
        <View style={styles.container}>
            <Text style={styles.title}>Iniciar Session</Text>
            <Controller 
            control={control}
            render={({ field: {onChange, onblur, value}}) => (
              <TextInput
              style={styles.input}
              placeholder="Nombre de usuario"
              onBlur={onblur}
              onChangeText={onChange}
              value={value}
              autoCapitalize="none"
              />
            )}
            name="username"
            rules={{ required: "El nombre de usuario es requerido" }}
            />
            {errors && <Text style={styles.errorText}>{errors.username?.message}</Text>}
            <Controller 
            control={control}
            render={({ field: {onChange, onblur, value}}) => (
              <TextInput
              style={styles.input}
              placeholder="Contraseña"
              onBlur={onblur}
              onChangeText={onChange}
              value={value}
              secureTextEntry
              />
            )}
            name="password"
            rules={{ required: "La contraseña es requerido" }}
            />
            {errors && <Text style={styles.errorText}>{errors.password?.message}</Text>}
            <TouchableOpacity style={styles.button} onPress={handleSubmit(handleLogin)} >
              <Text style={styles.buttonText}>Ingresar</Text>
            </TouchableOpacity>
        </View>
      )
}