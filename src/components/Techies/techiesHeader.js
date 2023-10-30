import { Dimensions, StyleSheet, Text, View, Image, Platform } from 'react-native'
import React, { useContext, useEffect, useState} from 'react'
import {Ionicons} from "@expo/vector-icons";
import TextOpen from '../TextOpen';
import { useNavigation } from '@react-navigation/native';
import { EventContext } from "../../context/EventContext"

const CalendarHeader = ({title,member}) => {
  const { userInfo, setUserInfo, isLoggedIn } = useContext(EventContext)
  const [pic, setPic] =useState(require('../../../assets/profile.jpg'))

  //This below is essential for editing the header and all other setOptions where useLayoutEffect helps display certain items before the screen loads
  const navigation = useNavigation();



  useEffect(() => {
    const firstLetter = userInfo.msg.name[0].toLowerCase();
    if (firstLetter=='i'){setPic(require('../../../assets/profile/i.jpg'))}
    else if (firstLetter=='a'){setPic(require('../../../assets/profile/a.jpg'))}
    else if (firstLetter=='b'){setPic(require('../../../assets/profile/b.jpg'))}
    else if (firstLetter=='c'){setPic(require('../../../assets/profile/c.jpg'))}
    else if (firstLetter=='d'){setPic(require('../../../assets/profile/d.jpg'))}
    else if (firstLetter=='e'){setPic(require('../../../assets/profile/e.jpg'))}
    else if (firstLetter=='f'){setPic(require('../../../assets/profile/f.jpg'))}
    else if (firstLetter=='g'){setPic(require('../../../assets/profile/g.jpg'))}
    else if (firstLetter=='h'){setPic(require('../../../assets/profile/h.jpg'))}
    else if (firstLetter=='i'){setPic(require('../../../assets/profile/i.jpg'))}
    else if (firstLetter=='j'){setPic(require('../../../assets/profile/j.jpg'))}
    else if (firstLetter=='k'){setPic(require('../../../assets/profile/k.jpg'))}
    else if (firstLetter=='l'){setPic(require('../../../assets/profile/l.jpg'))}
    else if (firstLetter=='m'){setPic(require('../../../assets/profile/m.jpg'))}
    else if (firstLetter=='n'){setPic(require('../../../assets/profile/n.jpg'))}
    else if (firstLetter=='o'){setPic(require('../../../assets/profile/o.jpg'))}
    else if (firstLetter=='p'){setPic(require('../../../assets/profile/p.jpg'))}
    else if (firstLetter=='q'){setPic(require('../../../assets/profile/q.jpg'))}
    else if (firstLetter=='r'){setPic(require('../../../assets/profile/r.jpg'))}
    else if (firstLetter=='s'){setPic(require('../../../assets/profile/s.jpg'))}
    else if (firstLetter=='t'){setPic(require('../../../assets/profile/t.jpg'))}
    else if (firstLetter=='u'){setPic(require('../../../assets/profile/u.jpg'))}
    else if (firstLetter=='v'){setPic(require('../../../assets/profile/v.jpg'))}
    else if (firstLetter=='w'){setPic(require('../../../assets/profile/w.jpg'))}
    else if (firstLetter=='x'){setPic(require('../../../assets/profile/x.jpg'))}
    else if (firstLetter=='y'){setPic(require('../../../assets/profile/y.jpg'))}
    else if (firstLetter=='z'){setPic(require('../../../assets/profile/z.jpg'))}
    else {setPic(require('../../../assets/profile.jpg'))}
  }, []);


  return (
    <View
      style={{
        flexDirection: "row",
        height: 48,
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: '#c9d6d6',
        paddingBottom: 10,
        paddingHorizontal: Platform.OS === 'ios' ? 25 : 0,
      }}
    >
      <Ionicons  onPress={()=>
        navigation.goBack()} name="md-chevron-back" size={29} color="black" />

<View style={{ }} >
              <TextOpen
        style={{
          color: "#710193",
          fontSize: 20,
        }}
        font={"OpenSans_600SemiBold"}
      >
        {title}
      </TextOpen>
      <Text>{member}</Text>
      </View>
          <View
            style={{
              backgroundColor: "#EEBEFD",
              height: 48,
              width: 48,
              borderRadius: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
      <Image style={{
        height: 38,
        width: 38,
        borderRadius: 40,
      }} source={pic} />
      </View>
    </View>
  );
}

export default CalendarHeader

const styles = StyleSheet.create({})