import { StyleSheet, StatusBar, FlatList, Keyboard, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Pressable, Image } from 'react-native';
import colors from '../layouts/colors'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { useState, useContext, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import TextOpen from '../components/TextOpen';
import CommentHeader from '../components/People/commentHeader';
import CommentCard from '../components/People/commentCard';
import { EventContext } from "../context/EventContext"



const Comment = () => {
  const [newComment, setNewComment] = useState('');
  const { userInfo, setUserInfo, isLoggedIn } = useContext(EventContext)
  const [pic, setPic] =useState(require('../../assets/profile.jpg'))
   const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const[display, setDisplay]=useState('block');
  const [comments, setComments] = useState([
    { id: 1, name: 'John Doe', comment: 'Thank you for showing this Event to me', date: "2023-09-20", pic: require('../../assets/profile/j.jpg'), display: 'block', },
    { id: 2, name: 'Jane Smith', comment: 'Thank you for showing this Event to me', date: "2023-09-22", pic: require('../../assets/profile/j.jpg'), display: 'block', },
    { id: 3, name: 'Alice Johnson', comment: 'Thank you for showing this Event to me', date: "2023-09-25", pic: require('../../assets/profile/a.jpg'), display: 'block', },
    { id: 4, name: 'Bob Brown', comment: 'Thank you for showing this Event to me', date: "2023-09-28", pic: require('../../assets/profile/b.jpg'), display: 'block', },
    { id: 5, name: 'Ella Davis', comment: 'Thank you for showing this Event to me', date: "2023-10-02", pic: require('../../assets/profile/e.jpg'), display: 'block', },
    { id: 6, name: 'Mike Wilson', comment: 'Thank you for showing this Event to me', date: "2023-10-05", pic: require('../../assets/profile/m.jpg'), display: 'block', },
    { id: 7, name: 'Sarah Clark', comment: 'Thank you for showing this Event to me', date: "2023-10-08", pic: require('../../assets/profile/s.jpg'), display: 'block', },
    { id: 28, name: 'Henry Morgan', comment: 'Thank you for showing this Event to me', date: "2023-10-11", pic: require('../../assets/profile/h.jpg'), display: 'block', },
    { id: 29, name: 'Sofia Bennett', comment: 'Thank you for showing this Event to me', date: "2023-10-15", pic: require('../../assets/profile/s.jpg'), display: 'block', },
    { id: 30, name: 'Jack Davis', comment: 'Thank you for showing this Event to me', date: "2023-10-19", pic: require('../../assets/profile/j.jpg'), display: 'block', },
  ])

  //This below is essential for editing the header and all other setOptions where useLayoutEffect helps display certain items before the screen loads
  const navigation = useNavigation();


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




 



  const handleIconPress = () => {
    // Handle the action when the icon is pressed (e.g., send message)
  };
  const onDisplay = ()=>{
    setDisplay('none');
  };
  

  const addComment = () => {
    if (newComment.trim() !== '' && userInfo.msg.name.trim() !== '') {
      const today = new Date();
      const comment = {
        id: Math.floor(Math.random() * 10000),
        name: userInfo.msg.name,
        comment: newComment,
        date: `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`,
        pic: pic, // Use the dynamic profile picture URL
      };
      setComments([...comments, comment]);
      setNewComment('');
      Keyboard.dismiss();
    }
  };

  return (
    <View style={styles.contactscontainer}>
      <StatusBar style='auto' />
      {/* Event Details */}
      <View style={styles.contactscont}>
        <Pressable onPress={onDisplay}>
        < CommentHeader/>
      {/* Comments */}      
      <View style={styles.today}>
        <Text style={styles.todaytext}>Today</Text>
        </View>
        </Pressable>
      < CommentCard display={display} onPresser={onDisplay}/>
               <FlatList style={styles.flatlist}
      onPress={onDisplay} 
        data={comments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => 
          (<Pressable style={[styles.contactItem, {display: item.display }]} onPress={onDisplay}>
         <View style={{flexDirection: 'row', justifyContent: 'space-between', }}><View style={{flexDirection: 'row', }}><Image style={styles.profilepic} source={item.pic} /><Text style={styles.contacttext}>{item.name}</Text></View></View>
            <Text style={styles.contactnum}>{item.comment}</Text>
            <Text style={styles.contactnum}>{item.date}</Text>
          </Pressable>)
        }
      />
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16 }}>        
        <TextInput
          style={{

            zIndex: 9,
            flex: 1,
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            paddingHorizontal: 8,
            borderRadius: 20,
            marginLeft: 16,
            backgroundColor: 'white',
          }}
          placeholder={isKeyboardVisible ? 'Send your Comment...' : 'Click to start typing...'}
          onChangeText={(text) => setNewComment(text)}
          onFocus={() => setKeyboardVisible(true)}
          onBlur={() => setKeyboardVisible(false)}
          value={newComment}
        />
        {isKeyboardVisible ? <TouchableOpacity onPress={() => handleIconPress()}>
          <Icon name={isKeyboardVisible ? 'send' : 'image'} size={40} color={colors.primary} style={{paddingLeft: 7,}}  onPress={addComment}/>
        </TouchableOpacity>
        :<><TouchableOpacity onPress={() => handleIconPress()}>
          <Icon name={isKeyboardVisible ? 'send' : 'image-outline'} size={24} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleIconPress()}>
          <Icon name={isKeyboardVisible ? 'send' : 'microphone-outline'} size={24} color="grey" />
        </TouchableOpacity></> }
        
      </View>
    </KeyboardAvoidingView>
    </View>
      {/* Input */}
    </View>
  )
}



const styles = StyleSheet.create({
  flatlist: {
  },
  inputWrapper: {
    position: "absolute",
  },
  contactscontainer: {
    backgroundColor: 'white',
  },
  contactscont: {
    height: '98%',
    backgroundColor: 'white',
    paddingHorizontal: 5,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'black',
  },
  today: {
    alignItems: 'center',
    marginTop: 3,
},
profilepic: {
borderRadius: 50,
width: 30,
height: 30,
},
todaytext: {
  fontSize: 10,
  borderRadius: 50,
  paddingHorizontal: 7,
  paddingVertical: 3,
  backgroundColor: '#ffeeda',
  color: 'orange',
},
  contactItem: {
    margin: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 15,
    boxShadow: 6,
   },
  contacttext: {
    color: colors.primary,
    fontWeight: '900',
    padding: 9,
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderRadius: 50,
  },
  contactnum: {
    color: 'black',
    padding: 9,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    borderRadius: 50,
  },

})

export default Comment;