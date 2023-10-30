import {StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import React, {useContext, useState, useEffect} from "react";
import SettingsHeader from "../components/Settings/SettingsHeader";
import TextOpen from "../components/TextOpen";
import {Ionicons} from "@expo/vector-icons";
import {SimpleLineIcons} from "@expo/vector-icons";
import { AuthContext } from "../context/AuthContext";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { EventContext } from "../context/EventContext"
import Spinner from "react-native-loading-spinner-overlay";
import axios from "axios";

const Settings = () => {
  const navigation = useNavigation();
  // const {userInfo} = useContext(AuthContext);
  const { userInfo, setUserInfo, isLoggedIn } = useContext(EventContext)
const [pic, setPic] =useState(require('../../assets/profile.jpg'))
const [isLoading, setIsLoading] = useState(false);



const logout = async  () => {
  setIsLoading(true);
  try {
    await AsyncStorage.removeItem("userInfo");      
      setIsLoading(false);
      navigation.replace("Login");
      alert(`You have been logged out, you can log back in`);
    }
    catch(e) {
      alert(`logout error ${e}`);
      setIsLoading(false);
    }
};


  useEffect(() => {
    const firstLetter = userInfo.msg.name[0].toLowerCase();
    if (firstLetter=='i'){setPic(require('../../assets/profile/i.jpg'))}
    else if (firstLetter=='a'){setPic(require('../../assets/profile/a.jpg'))}
    else if (firstLetter=='b'){setPic(require('../../assets/profile/b.jpg'))}
    else if (firstLetter=='c'){setPic(require('../../assets/profile/c.jpg'))}
    else if (firstLetter=='d'){setPic(require('../../assets/profile/d.jpg'))}
    else if (firstLetter=='e'){setPic(require('../../assets/profile/e.jpg'))}
    else if (firstLetter=='f'){setPic(require('../../assets/profile/f.jpg'))}
    else if (firstLetter=='g'){setPic(require('../../assets/profile/g.jpg'))}
    else if (firstLetter=='h'){setPic(require('../../assets/profile/h.jpg'))}
    else if (firstLetter=='i'){setPic(require('../../assets/profile/i.jpg'))}
    else if (firstLetter=='j'){setPic(require('../../assets/profile/j.jpg'))}
    else if (firstLetter=='k'){setPic(require('../../assets/profile/k.jpg'))}
    else if (firstLetter=='l'){setPic(require('../../assets/profile/l.jpg'))}
    else if (firstLetter=='m'){setPic(require('../../assets/profile/m.jpg'))}
    else if (firstLetter=='n'){setPic(require('../../assets/profile/n.jpg'))}
    else if (firstLetter=='o'){setPic(require('../../assets/profile/o.jpg'))}
    else if (firstLetter=='p'){setPic(require('../../assets/profile/p.jpg'))}
    else if (firstLetter=='q'){setPic(require('../../assets/profile/q.jpg'))}
    else if (firstLetter=='r'){setPic(require('../../assets/profile/r.jpg'))}
    else if (firstLetter=='s'){setPic(require('../../assets/profile/s.jpg'))}
    else if (firstLetter=='t'){setPic(require('../../assets/profile/t.jpg'))}
    else if (firstLetter=='u'){setPic(require('../../assets/profile/u.jpg'))}
    else if (firstLetter=='v'){setPic(require('../../assets/profile/v.jpg'))}
    else if (firstLetter=='w'){setPic(require('../../assets/profile/w.jpg'))}
    else if (firstLetter=='x'){setPic(require('../../assets/profile/x.jpg'))}
    else if (firstLetter=='y'){setPic(require('../../assets/profile/y.jpg'))}
    else if (firstLetter=='z'){setPic(require('../../assets/profile/z.jpg'))}
    else {setPic(require('../../assets/profile.jpg'))}
  }, []);



  return (
    <View
      style={{
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 24,
        backgroundColor: "#FFFCFD",
      }}
    >
      <SettingsHeader />
      <Spinner visible={isLoading} />
      <View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "#EEBEFD",
              width: 78,
              height: 78,
              borderRadius: 40,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 30,
              marginBottom: 10,
            }}
          >
            <Image
              style={{width: 62, height: 62, borderRadius: 40}}
              source={pic}
              // defaultSource={require('../../assets/profile.jpg')}
            />
          </View>
          <TextOpen
            font={"OpenSans_600SemiBold"}
            style={{
              color: "#710193",
              fontSize: 15,
            }}
          >
            {/* {userInfo.name} */}
{ userInfo.msg.name}
          </TextOpen>
          <TextOpen
            style={{
              color: "#AD99B2",
              fontSize: 12,
            }}
          >
            {/* {userInfo.email} */}
{ userInfo.msg.email }
          </TextOpen>
        </View>
      </View>
      <View
        style={{
          marginTop: 30,
          borderRadius: 10,
          borderWidth: 0.5,
          borderColor: "#F4C6FF",
          padding: 16,
          backgroundColor: "#F0E8F2",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 13,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons
              name="notifications-outline"
              size={24}
              color="#87748C"
              style={{
                marginRight: 10,
              }}
            />
            <TextOpen
              style={{
                fontSize: 14,
                color: "#87748C",
              }}
            >
              Notification
            </TextOpen>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#87748C" />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 13,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons
              name="md-lock-closed-outline"
              size={24}
              color="#87748C"
              style={{
                marginRight: 10,
              }}
            />
            <TextOpen
              style={{
                fontSize: 14,
                color: "#87748C",
              }}
            >
              Privacy
            </TextOpen>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#87748C" />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 13,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons
              name="md-color-palette-outline"
              size={24}
              color="#87748C"
              style={{
                marginRight: 10,
              }}
            />
            <TextOpen
              style={{
                fontSize: 14,
                color: "#87748C",
              }}
            >
              Appearance
            </TextOpen>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#87748C" />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 13,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons
              name="globe-outline"
              size={24}
              color="#87748C"
              style={{
                marginRight: 10,
              }}
            />
            <TextOpen
              style={{
                fontSize: 14,
                color: "#87748C",
              }}
            >
              Language and Region
            </TextOpen>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#87748C" />
        </View>
      </View>
      <View
        style={{
          marginTop: 30,
          borderRadius: 10,
          borderWidth: 0.5,
          borderColor: "#F4C6FF",
          padding: 16,
          backgroundColor: "#F0E8F2",
          marginBottom: 30
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 13,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons
              name="help-circle-outline"
              size={24}
              color="#87748C"
              style={{
                marginRight: 10,
              }}
            />
            <TextOpen
              style={{
                fontSize: 14,
                color: "#87748C",
              }}
            >
              Help and Support
            </TextOpen>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#87748C" />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons
              name="information-circle-outline"
              size={24}
              color="#87748C"
              style={{
                marginRight: 10,
              }}
            />
            <TextOpen
              style={{
                fontSize: 14,
                color: "#87748C",
              }}
            >
              Privacy
            </TextOpen>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#87748C" />
        </View>
      </View>
      <TouchableOpacity
        style={{
          flexDirection: "row",
        }} onPress={()=> { logout();
        }}
      >
        <SimpleLineIcons name="logout" size={24} color="#EA3131" style={{
          marginLeft: 10,
          marginRight: 10
        }} />
        <TextOpen
          style={{
            fontSize: 16,
            color: "#EA3131",
          }}
        >
          Logout
        </TextOpen>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
