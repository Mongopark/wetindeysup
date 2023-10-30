import { createStackNavigator } from "@react-navigation/stack"
import Onboarding from "../screens/Onboarding"
import Login from "../screens/Login"
import Register from "../screens/Register"
import Loading from "../screens/Loading"
import TabNavigator from "./TabNavigator"

const Stack = createStackNavigator()

const PreviewStack = () => {
  return (
    <Stack.Navigator 
    initialRouteName="Getstarted"
      screenOptions = {{headerShown: false}}
    >
      <Stack.Screen name = {"Onboarding"} component = {Onboarding}/>
      <Stack.Screen name = {"Loading"} component = {Loading}/>
      <Stack.Screen name = {"Tabs"} component = {TabNavigator}/>
      <Stack.Screen name = {"Login"} component = {Login}/>
      <Stack.Screen name = {"Register"} component = {Register}/>
    </Stack.Navigator>
  )
}

export default PreviewStack