import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import colors from "../layouts/colors";
import {Ionicons} from "@expo/vector-icons";
import openSans from "../layouts/fonts";
import { Fontisto } from '@expo/vector-icons';
// import Button from "../components/onboarding/Bouton";
import Button from "../components/AppButton";
//THE BELOW IS NECESSARY FOR THE CONTEXT
import React, {useState, useContext, useEffect} from "react";
import { EventProvider, EventContext } from "../context/EventContext";
import Spinner from "react-native-loading-spinner-overlay";
import axios from "axios";
import {BASE_URL} from "../config";
import AsyncStorage from "@react-native-async-storage/async-storage";




const Login = ({navigation}) => {
  //list the items you need in the context
  const {userInfo, setUserInfo, name, setName, email, setEmail, password, setPassword, isLoggedIn } = useContext(EventContext);
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);



    
    // When the app starts, load the state from AsyncStorage (e.g., in your app's entry point(such as the onBoarding screen itself) or a component like App.js).
    useEffect( () => {
      const isUserLogged = async () => {
      try {
    let userInfo = await AsyncStorage.getItem("userInfo");
    userInfo = JSON.parse(userInfo);
  
    if (userInfo) {
      setUserInfo(userInfo);
  navigation.replace('Tabs')
    }
  } catch (e) {
    alert(`is logged in error ${e}`);
  }}
  
  isUserLogged();
  }, []);

  // const login = () => {
  //   setIsLoading(true);

  //   axios
  //     .post(`${BASE_URL}/login/`, {
  //       email,
  //       password,
  //     })
  //     .then((res) => {
  //       let userData = res.data;
  //       setUserInfo(userData.data);
  //       AsyncStorage.setItem("userInfo", JSON.stringify(userData));
  //       console.log("Log in successfully");
  //       setIsLoading(false);
  //       navigation.replace("Tab");
  //     })
  //     .catch((e) => {
  //       alert(`login error ${e}`);
  //       setIsLoading(false);
  //     });
  // };




  const Userlogin = async (name, password) => {
    try {
      setIsLoading(true);

      const response = await axios.post(
        `https://hngstage9backend.onrender.com/api/login`,
        {
          loginIdentifier: `${name}`,
          password: password,
        }
      );

      console.log({ test: response?.status });
      console.log({ test: response?.data });

      if (response?.data) {
        const userData = response.data;
        setUserInfo(userData);
        await AsyncStorage.setItem("userInfo", JSON.stringify(userData));
        console.log("Logged In Successfully");
        alert("Logged In Successfully");
        navigation.replace("Tabs");
      } else if (response.status === 400) {
        console.log("Invalid Email or Password");
        alert("Invalid Email or Password");
      }

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error({ error });
      alert("An error occurred while Logging In: " + error.message);
    }
  };




  return (
    <Pressable style={{flex: 1}} onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
        <Spinner visible={isLoading} />
        <View style={{flex: 1, marginHorizontal: 22}}>
          <View style={{marginVertical: 22}}>
            <Text
              style={{
                fontSize: 22,
                // fontFamily: openSans.bold,
                marginVertical: 12,
                color: colors.black,
              }}
            >
              Hi Welcome Back
            </Text>

            <Text
              style={{
                fontSize: 16,
                color: colors.black,
                // fontFamily: openSans.normal,
              }}
            >
              Login to an existing account
            </Text>
          </View>

          <View style={{marginBottom: 12, marginTop: 30}}>
            <Text
              style={{
                fontSize: 16,
                // fontFamily: openSans.medium,
                marginVertical: 8,
              }}
            >
              Username
            </Text>

            <View
            style={{
              width: "100%",
              height: 48,
              borderColor: 'black',
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingLeft: 22,
            }}
          >
             <TextInput
              placeholder="Enter your Username"
              value={name}
              onChangeText={(text) => setName(text)}
              placeholderTextColor={colors.black}
              style={{
                width: "80%",
              }}
            />
            </View>
          </View>

          <View style={{marginBottom: 12}}>
            <Text
              style={{
                fontSize: 16,
                // fontFamily: openSans.medium,
                marginVertical: 8,
              }}
            >
              Password
            </Text>

            <View
              style={{
                width: "100%",
                height: 48,
                borderColor: colors.black,
                borderWidth: 1,
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 22,
              }}
            >
              <TextInput
                placeholder="Enter your password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                placeholderTextColor={colors.black}
                secureTextEntry={isPasswordShown}
                style={{
                  width: "100%",
                }}
              />

              <TouchableOpacity
                onPress={() => setIsPasswordShown(!isPasswordShown)}
                style={{
                  position: "absolute",
                  right: 12,
                }}
              >
                {isPasswordShown == true ? (
                  <Ionicons name="eye-off" size={24} color={colors.black} />
                ) : (
                  <Ionicons name="eye" size={24} color={colors.black} />
                )}
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginVertical: 6,
              alignItems: 'center',
            }}
          >
            {/* <Checkbox
              style={{marginRight: 8}}
              value={isChecked}
              onValueChange={setIsChecked}
              color={isChecked ? colors.primary : undefined}
            /> */}
{isChecked ? (<Fontisto name="checkbox-active" size={24} color="black" onPress={()=>setIsChecked(!isChecked)} />):(<Fontisto name="checkbox-passive" size={24} color="black" onPress={()=>setIsChecked(!isChecked)} />)}
            <Text
              style={{
                paddingLeft: 10,
                // fontFamily: openSans.medium,
              }}
            >
              Remember Me
            </Text>
          </View>

          <Button
            title="Login"
            filled
            style={{
              marginTop: 30,
              marginBottom: 4,
            }}
            onPress={() => {Userlogin(name, password);}}
          />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginVertical: 22,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: colors.black,
                // fontFamily: openSans.medium,
              }}
            >
              Don't have an account?{" "}
            </Text>
            <Pressable onPress={() => navigation.replace('Register')}>
              <Text
                style={{
                  fontSize: 16,
                  color: colors.primary,
                  // fontFamily: openSans.bold,
                  marginLeft: 6,
                  fontWeight: 'bold',
                }}
              >
                Register
              </Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </Pressable>
  );
};

export default Login;
