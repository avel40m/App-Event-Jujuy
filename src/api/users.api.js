import AsyncStorage from "@react-native-async-storage/async-storage";

export const registerUser = async (username,password) => {
    try {
        const data = {
            username,
            password
        }
        let dataList = [];
        const jsonValue = await AsyncStorage.getItem('User');
        if (jsonValue) {
            dataList = JSON.parse(await AsyncStorage.getItem("User"))
        }
        const response = dataList.find(user => user.username === username)
        if (response) {
            return true
        } else {
            dataList.push(data);
            await AsyncStorage.setItem('User', JSON.stringify(dataList));
            return false
        }
    } catch (error) {
        console.warn(`Error: ${error}`);
    }
}

export const loginUser = async (username,password) => {
    try {
        const jsonValue = JSON.parse(await AsyncStorage.getItem("User"))
        const response = jsonValue.find(user => user.username === username);
        if (response) {
            console.log(response);
             if (response.password === password) {
                return 'ok'
             } else {
                return 'Password incorrecto'
             }
        } else {
            return 'Usuario incorrecto'
        }
    } catch (error) {
        console.warn(`Error: ${error}`);
    }
}