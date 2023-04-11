import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Alert, Text, TextInput, TouchableOpacity, Vibration, View } from "react-native";
import { loginUser, registerUser } from "../../api/users.api";
import { UserContext } from "../../contexts/UserContext";
import { styles } from './loginscreen.styles';

export const LoginScreen = () => {

  const [value, setValue] = useState(true);

  const PATTERN = [
    1 * 1000,
    2 * 1000,
  ]
  const { setCurrentUser } = useContext(UserContext);
  const navigation = useNavigation();
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      username: '',
      password: ''
    }
  });
  const handleLogin = async ({ username, password }) => {
   if (value) {
    const res = await loginUser(username,password);
    if (res === 'ok') {
              setCurrentUser({ username, password })
        navigation.navigate('Home')
    } else {
        Vibration.vibrate(PATTERN)
        Alert.alert(res, 'Chequee los datos nuevamente');
    }
  } else {
    let res = await registerUser(username,password);
    if (res) {
      Alert.alert('Mensaje: ', 'El usuario existe en la base de datos');
      Vibration.vibrate(PATTERN)
    } else {
      Alert.alert('Mensaje','Usuario creado correctamente');
      setValue(true);
    }
  }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {
          value ? "Iniciar Session" : "Registrarme"
        }
      </Text>
      <Controller
        control={control}
        render={({ field: { onChange, onblur, value } }) => (
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
        render={({ field: { onChange, onblur, value } }) => (
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
        <Text style={styles.buttonText}>
          {
            value ? "Ingresar" : "Regitrarme"
          }
        </Text>
      </TouchableOpacity>
      <View style={styles.parrafo}>
        {
          value ? (
            <>
              <Text style={styles.parrafoTitulo}>¿Todavia no tenes cuenta?</Text>
              <Text style={styles.parrafoLink} onPress={() => setValue(!value)}>Registrarme</Text>
            </>
          ) : (
            <>
              <Text style={styles.parrafoTitulo}>Tengo una cuenta</Text>
              <Text style={styles.parrafoLink} onPress={() => setValue(!value)}>Iniciar Session</Text>
            </>

          )
        }
      </View>
    </View>
  )
}