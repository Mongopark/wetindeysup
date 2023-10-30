// In App.js in a new project

// Note: The stack navigator I commented out is for the authentication flow

import React, {useContext} from "react";
import {NavigationContainer} from "@react-navigation/native";
// This below is just for testing, will be removed eventually
import Home from "./src/screens/Home";
import Onboarding from "./src/screens/Onboarding";
import Comments from "./src/screens/Comment";
import PreviewStack from "./src/navigators/PreviewNavigation";
// import {AuthContext} from "../context/AuthContext";
import { DataContextProvider } from "./src/context/DataContext";
import HomeStack from "./src/navigators/HomeStack";
import AllEvents from "./src/screens/AllEvents";
import AuthNavigator from "./src/navigators/AuthNavigator";
import TabNavigator from "./src/navigators/TabNavigator";
import { EventProvider, EventContext } from "./src/context/EventContext";

const App = () => {
  // const {userInfo, isLoggedIn, } = useContext(EventContext);

  return (
      <NavigationContainer>
         <EventProvider>
        <DataContextProvider>
          {/* <PreviewStack /> */}
          {/* <TabNavigator /> */}
          {/* <HomeStack/> */}
          {/* <AllEvents/> */}
         <AuthNavigator/>
        </DataContextProvider>
      {/* <Home /> */}
        {/* <Onboarding /> */}
          {/* <Comments /> */}
                    {/* {userInfo.token ? <TabNavigator /> : <AuthNavigator />} */}
        {/*</Stack.Navigator> */}
        </EventProvider>
      </NavigationContainer>

  );
};

export default App;