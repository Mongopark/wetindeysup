import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import Onboarding from "../screens/Onboarding";
import GetStarted from "../screens/GetStarted"
import Register from "../screens/Register";
import TabNavigator from "./TabNavigator"

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions = {{headerShown: false}}
    >
    <Stack.Screen name = {"Getstarted"} component = {GetStarted}/>
      {/* <Stack.Screen name="Onboarding" component={Onboarding} /> */}
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name = {"Tabs"} component = {TabNavigator}/>
    </Stack.Navigator>
  );
};

export default AuthNavigator;
