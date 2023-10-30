import { StyleSheet, Text, View, TextInput, ScrollView, Pressable, Image, Alert } from 'react-native'
import React, { useState, useReducer, useContext } from 'react'
import Constants from "expo-constants"
import DateTimePicker from "@react-native-community/datetimepicker"
import colors from "../layouts/colors"
import CreateEventInputBox from "../components/CreateEventInputBox"
import AppTextInput from "../components/AppTextInput"
import { Ionicons } from '@expo/vector-icons';
import TextOpen from "../components/TextOpen"
import AppButton from "../components/AppButton"
import DropdownPicker from "react-native-dropdown-picker"
import { useNavigation } from '@react-navigation/native';
import { useDataContext } from '../hooks/useDataContext';
import { EventContext } from "../context/EventContext"

const pickerReducer = (state, action) => {
  switch (action.type) {
    case 'DATE_OPEN':
      return {...state, dateOpen: true}
      break;
    case 'DATE_CLOSE':
      return {...state, dateOpen: false}
      break;
    case 'TIME_OPEN':
      return {...state, timeOpen: true}
      break;
    case 'TIME_CLOSE':
      return {...state, timeOpen: false}
      break;
    
    default:
      return state
  }
}

const CreateEvent = () => {
  const { events, setEvents } = useContext(EventContext);
  const [date, setDate] = useState(new Date())
  const [state, dispatch] = useReducer(pickerReducer, {})
  const [selectedGroup, setSelectedGroup] = useState("")
  const [openDropdown, setOpenDropdown] = useState(false)
  const [time, setTime] = useState(new Date());
//   const currentTime = new Date();
// const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
// const formattedTime = new Intl.DateTimeFormat('en-US', timeOptions).format(currentTime);
  const [newEvent, setNewEvent] = useState({
    id: Math.floor(Math.random() * 1001)+30,
    description: "",
    location: "",
    time: "",
    date: "",
    thumbnail:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpASgN5IPkWV3ZgTKE_qOjE1K3qjG_osPYew&usqp=CAU",
    friend: false,
  })
  const [formatted, setFormatted] = useState({})
  const [select, setSelect] = useState(new Date())
  const [dateTime, setDateTime] = useState(new Date())
  //This below is essential for passing data between screens, accessing the navigation props. AND ADDING A FUNCTIONAL ELEMENT(AND ICONS) TO THE DEFAULT HEADER, before this useNavigation can be used, the component has to in one way or the other(directly or indirectly) be wrapped in a navigatorContainer
const navigation = useNavigation();

const {data, dispatch: dispatcher} = useDataContext()

  const groups = [
    {
      value: 1,
      label: "Everyone",
    },
    {
      value: 2,
      label: "Friends",
    },
    
  ]
  

  // {
  //   id: 24,
  //   title: "Art Exhibition",
  //   location: "Art Gallery, Downtown",
  //   start_time: "11:00 AM",
  //   end_time: "7:00 PM",
  //   date: "2023-09-28",
  //   thumbnail:
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpASgN5IPkWV3ZgTKE_qOjE1K3qjG_osPYew&usqp=CAU",
  //   friend: true,
  // },

const onSubmit = () => {
    // Check if the new event is valid (e.g., has required fields)
    if (newEvent.description!=='' && newEvent.location!=='' && newEvent.start_date!=='' && newEvent.end_date!=='') {
      // Add the new event to the events array
      setEvents([... events,  newEvent] );
console.log(newEvent);
setNewEvent({
  id: Math.floor(Math.random() * 1001)+30,
  description: "",
  location: "",
  time: "",
  date: "",
  thumbnail:
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpASgN5IPkWV3ZgTKE_qOjE1K3qjG_osPYew&usqp=CAU",
  friend: false,
});
navigation.goBack();
}

}


  //Adding the event to the API
  // const onSubmit = async () => {

  //   newEvent.creator_id = '1234'
  //   newEvent.thumbnail = '../assets/'
  //   newEvent.title = 'first event'

  //   const Event = newEvent
  //   // Alert.alert('successfully created', JSON.stringify(Event))
  //   const response = await fetch(`https://spitfire.onrender.com/api/events`, {
  //           method: 'POST',
  //           headers: {
  //               'Content-Type': 'application/json'
  //           },
  //           body: JSON.stringify({creator_id: Event.creator_id, description: Event.description, title: Event.title, location: Event.location, thumbnail: Event.thumbnail, start_time: Event.start_date, end_time: Event.end_date, end_date: Event.end_date, start_date: Event.start_date }) 
  //       })

  //   const json = await response.json()

  //   if(!response.ok){
  //     Alert.alert('An Error occured while creating new event', JSON.stringify(json.message))
  //   }

  //   if(response.ok) {
  //     dispatcher({type: 'CREATE_DATA', payload: json.data})
  //     Alert.alert('successfully created', JSON.stringify(json.message))
  //   }
  // }

  return (
    <View style = { styles.container}>
    
    {state.dateOpen && (
  <DateTimePicker
    display="default"
    value={date}
    mode="date"
    onChange={(e, selectedDate) => {
      setDate(selectedDate);
      const formattedDate = selectedDate.toLocaleDateString();
      setFormatted({
        startDate: formattedDate,
        startTime: selectedDate.toLocaleTimeString(),
      });
      setNewEvent({... newEvent,  date: formattedDate });
      dispatch({ type: "DATE_CLOSE" });
    }}
    minimumDate={new Date()}
  />
)}

{state.timeOpen && (
  <DateTimePicker
    display="default"
    value={time}
    mode="time"
    onChange={(e, selectedTime) => {
      setTime(selectedTime);
      const formattedTime = selectedTime.toLocaleTimeString();
      setSelect({
        startDate: selectedTime.toLocaleDateString(),
        startTime: formattedTime,
      });
      setNewEvent({... newEvent,  time: formattedTime} );
      dispatch({ type: "TIME_CLOSE" });
    }}
    minimumDate={new Date()}
  />
)}
      
    
    
      <ScrollView>
        <View style= {{marginBottom: 20, justifyContent: 'space-between', flexDirection: 'row',}}>
          <TextOpen 
            style = {styles.header}
            font = {"OpenSans_700Bold"}
          >Create Event</TextOpen>
          <Ionicons  onPress={()=>
        navigation.goBack()} name="close" size={29} style={{paddingTop: 8,}} color="black" />
        </View>
        
        <View style = {{marginBottom: 20}}>
          <TextOpen 
            style = {styles.label}
            font = {"OpenSans_600SemiBold"}
          >Event Description</TextOpen>
          <CreateEventInputBox
            onChangeText = {(val) => setNewEvent({...newEvent, description: val})}
            button = {false}
            numberOfLines = {1}
          />
        </View>
        <View style = {{marginBottom: 20}}>
          <TextOpen 
            style = {styles.label}
            font = {"OpenSans_600SemiBold"}
          >Location</TextOpen>
          
          <CreateEventInputBox
            button = {true}
            iconSrc = {require("../../assets/icons/location-icon.png")}
            btnText = {"Add Location"}
            numberOfLines = {1}
            onChangeText = {(val) => setNewEvent({...newEvent, location : val})}
          />
        </View>
        
        
                   <View style = {{flexDirection: "row", flex: 1, justifyContent: 'space-between', marginBottom: 20}}>
                   <View style = {{width: '45%', }}>
                   <TextOpen 
            style = {styles.label}
            font = {"OpenSans_600SemiBold"}
          >Date</TextOpen>
            <CreateEventInputBox
              button = {true}
              iconSrc = {require("../../assets/icons/calendar-icon.png")}
              numberOfLines = {1}
              editable = {false}
              placeholder = {formatted.startDate || "DD/MM/YYYY"}
              onPress = {() => dispatch({type: "DATE_OPEN"})}
              placeholderTextColor={formatted.startDate && "#000"}
            />
                    </View>
                    <View style = {{width: '45%', }}>
            <TextOpen 
            style = {styles.label}
            font = {"OpenSans_600SemiBold"}
          >Time</TextOpen>
            <CreateEventInputBox
              button = {true}
              iconSrc = {require("../../assets/icons/time-icon.png")}
              numberOfLines = {1}
              editable = {false}
              placeholder = {select.startTime || "00:00"}
              onPress = {() => dispatch({type: "TIME_OPEN"})}
              placeholderTextColor={select.startTime && "#000"}
            />
                     </View>
          </View>
       
        
       
      </ScrollView>
      <View style ={{marginBottom: 10}}>
          <TextOpen 
            style = {styles.label}
            font = {"OpenSans_600SemiBold"}
          >Select groups</TextOpen>         
        </View>        
      <DropdownPicker
            value={selectedGroup}
            items={groups}
            open={openDropdown}
            containerStyle={{
              borderColor: "rgba(244, 198, 255, 1)",
              backgroundColor: colors.white,
              zIndex: 1,
              borderRadius: 10,
            }}
            style = {{
              backgroundColor: "rgba(240, 232, 242, 1)",
              borderWidth: 0.5,
              borderColor: "rgba(244, 198, 255, 1)",
            }}
            placeholderStyle={{ fontSize: 16 }}
            placeholder={selectedGroup}
            onPress={() => setOpenDropdown(!openDropdown)}
            keyExtractor={(item, index) => item}
            dropDownContainerStyle={{
              borderColor: colors.inputBorder,
              borderWidth: 0.2,
              borderColor: colors.borderColor,
            }}
            textStyle={{ fontSize: 16, }}
            onSelectItem={(val) => {
              setSelectedGroup(val.label)
              if(val.label=='Everyone'){
              setNewEvent({...newEvent, friend: false})
              setOpenDropdown(false);
            }else if(val.label=='Friends') {
              setNewEvent({...newEvent, friend: true})
              setOpenDropdown(false);
            }
            }}
            labelStyle={{ fontSize: 16, }}
            listItemLabelStyle={{ fontSize: 16, }}
          />
             <AppButton
          onPress = {() => {
            onSubmit()
            // Alert.alert('new event', JSON.stringify(newEvent));
          }}
          title = {"Create Event"}
          style = {{marginVertical: 60, }}
        />
    </View>
  )
}

export default CreateEvent

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 10,
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  header: {
    color: "rgba(124, 20, 155, 1)",
    fontSize: 30,
  },
  label: {
    fontSize: 14,
    color: colors.lightGrey,
    marginBottom: 5,
    
  },
  textBtn: {
    flexDirection: "row",
    gap: 10,
    height: "100%",
    alignItems: "center",
    paddingHorizontal: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 0.5,
    
  },
  
})