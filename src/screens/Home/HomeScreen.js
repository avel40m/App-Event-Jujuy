import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { LoginScreen } from "../Login/LoginScreen"
import { WelcomeScreen } from "../welcome/WelcomeScreen"

export const HomeScreen = () => {
  const {currentUser} = useContext(UserContext);
  console.log(currentUser);
  return (
    <>
      {
        currentUser ?
        ( <WelcomeScreen /> )
        :
        ( <LoginScreen /> )
      }
    </>
  )
  
}
