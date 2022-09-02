import { useEffect, useMemo, useState } from "react";
import Chat from "./components/Chat";
import Navigation from "./components/Navigation";
import { AppContainer } from "./styles/App.styled";

function App() {

  const axios = require('axios')

  const initialState = [
    {
      id: 0, 
      isActive: false,
      name: "Alice Freeman", 
      pic: "https://cdn-icons-png.flaticon.com/512/3976/3976696.png",
      last_message: "Good night",
      updated: "September 2, 2022",
      messages: [
        {
          id: 0, 
          text: "Hello",
          createdAt: ("8/28/2022, 11:18 PM"),
          isMy: true
        },
        {
          id: 1, 
          text: "Good night",
          createdAt: "8/28/2022, 11:21 PM",
          isMy: false
        }
      ]
    },
    {
      id: 1, 
      isActive: false,
      name: "Josefina", 
      pic: "https://cdn-icons-png.flaticon.com/512/3641/3641473.png",
      last_message: "I'm having breakfast right now",
      updated: "September 1, 2022",
      messages: [
        {
          id: 0, 
          text: "Quick come to the meeting room, Quick come to the meeting room",
          createdAt: "8/29/2022, 1:18 PM",
          isMy: true
        },
        {
          id: 1, 
          text: "I'm having breakfast right now",
          createdAt: "8/29/2022, 1:20 PM",
          isMy: false
        }
      ]
    }
  ]

const [users, setUsers] = useState(initialState);
const [activeUser, setActiveUser] = useState()
const [filter, setFilter] = useState('');

useEffect(() => {
  let new_users = JSON.parse(localStorage.getItem("messages"))
  if (new_users !== undefined && new_users !== null) {
    setUsers(new_users)
  }
}, [])

const sortedUsers = useMemo(() => {
  return [...users].sort((a,b) => new Date(b.updated) - new Date(a.updated))
}, [users])

const sortedSearchedUsers = useMemo(() => {
  return sortedUsers.filter(user => user.name.toLowerCase().includes(filter.toLowerCase()))
}, [filter, sortedUsers])

  const setDate = () => {
    return new Date().toLocaleString('en', {
      day: "numeric",
      month: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric"
    })
  }

  const getMessage = (messageText, isMy) => {
    createMessage(messageText, isMy)
    setTimeout(() => {
          fetchResponse()
          .then(res => createMessage(res, !isMy))
      }, 5000)
  }

  const createMessage = (messageText, isMy) => {
    setUsers([
        ...users.map(user => {
          if(user.id === activeUser) {
            user.last_message = messageText
            user.updated = setDate()
            user.messages.push({
              id: users.find(user => user.id === activeUser).messages.length,
              text: messageText,
              createdAt: setDate(),
              isMy: isMy
            })
            localStorage.setItem("messages", JSON.stringify(users))
          }
          return user
        })
    ])  
  }

  const fetchResponse = async () => {
    let response = await axios.get('https://api.chucknorris.io/jokes/random')
    return await response.data.value
  } 

  return (
    <AppContainer>
        <Navigation 
        users={sortedSearchedUsers} 
        activeUser={activeUser} 
        setActiveUser={setActiveUser}
        filter={filter} setFilter={setFilter}/>
        <Chat users={sortedSearchedUsers} activeUser={activeUser} sendMessage={getMessage}/> 
    </AppContainer>
  );
}

export default App;
