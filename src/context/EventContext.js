import { createContext, useState, useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage";



const EventContext = createContext();
const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([
    {
      id: 1,
      description: "Movie Night",
      location: "Genesis cinemas, Festac",
      time: "10:00:00 AM",
      date: "20/09/2023", // Use ISO date format (YYYY-MM-DD)
      thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpASgN5IPkWV3ZgTKE_qOjE1K3qjG_osPYew&usqp=CAU",
      friend: false,
    },
    {
      id: 2,
      description: "Event 23",
      location: "Elm St, Town, Country",
      time: "2:00:00 PM",
      date: "22/09/2023",
      thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpASgN5IPkWV3ZgTKE_qOjE1K3qjG_osPYew&usqp=CAU",
      friend: true,
    },
    {
      id: 3,
      description: "Tech Conference",
      location: "Tech Center, City",
      time: "5:00:00 PM",
      date: "25/09/2023",
      thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpASgN5IPkWV3ZgTKE_qOjE1K3qjG_osPYew&usqp=CAU",
      friend: false,
    },
    {
      id: 4,
      description: "Art Exhibition",
      location: "Art Gallery, Downtown",
      time: "11:00:00 AM",
      date: "28/09/2023",
      thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpASgN5IPkWV3ZgTKE_qOjE1K3qjG_osPYew&usqp=CAU",
      friend: true,
    },
  ])
  const [userInfo, setUserInfo] = useState({});
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const isLoggedIn = async () => {
    try {
      let userInfo = await AsyncStorage.getItem("userInfo");
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserInfo(userInfo);
        console.log(userInfo);
      }
    } catch (e) {
      alert(`is logged in error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <EventContext.Provider value = {{events, setEvents, userInfo, setUserInfo, name, setName, email, setEmail, password, setPassword, isLoggedIn, }}>
      {children}
    </EventContext.Provider>
  )
}



export { EventContext, EventProvider };