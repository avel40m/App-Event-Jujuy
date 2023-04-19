import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { LoginScreen } from '../Login/LoginScreen'
import { WelcomeScreen } from '../Welcome/WelcomeScreen'

export const HomeScreen = () => {
  const { currentUser } = useContext(UserContext)
  return (
    <>
      {
        currentUser
          ? (<WelcomeScreen />)
          : (<LoginScreen />)
      }
    </>
  )
}
