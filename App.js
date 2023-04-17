import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { MainStackScreen } from './src/screens/Main/MainScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { UserProvider } from './src/contexts/UserContext'
import { EventDetailScreen } from './src/screens/EventDetailScreen/EventDetailScreen'
import { CommentScreen } from './src/screens/Comment/CommentScreen'

const LocationListStack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <UserProvider>
        <NavigationContainer>
          <LocationListStack.Navigator screenOptions={{ headerShown: false }}>
            <LocationListStack.Screen name='Main' component={MainStackScreen} />
            <LocationListStack.Screen name='EventDetail' component={EventDetailScreen} />
            <LocationListStack.Screen name='Comment' component={CommentScreen} />
          </LocationListStack.Navigator>
        </NavigationContainer>
      </UserProvider>

      <StatusBar style='auto' />
    </>
  )
}
