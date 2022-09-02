import React, { useEffect, useRef } from 'react';
import { ChatArea, StyledChat } from '../styles/Chat.styled';
import { SearchResults } from '../styles/Navigation.styled';
import Message from './Message';
import Profile from './Profile';
import SendMessage from './SendMessageForm';

const Chat = ({ users, sendMessage, activeUser }) => {

    const scrollRef = useRef();

    useEffect(() => {
        if(users !== undefined) {
            scroll()
        }
    })

    const scroll = () => {
        if (scrollRef.current !== undefined && scrollRef.current !== null) {
            scrollRef.current.scrollIntoView({behavior: "smooth"})
            }
        if (scrollRef === undefined) {
        }
    }

    if (users.find(user => user.id === activeUser)) {
    let activedUser = users.find(user => user.id === activeUser)
    let messages = activedUser.messages.map(message => {
        return (
                <Message key={message.id} 
                isMy={message.isMy} 
                avatar={activedUser.pic}
                text={message.text}
                date={message.createdAt}
                />
        )
    })

    return ( 
        <StyledChat>
            <Profile avatar={activedUser.pic}
                name={activedUser.name}/>
            <ChatArea>
                {messages}
                <div ref={scrollRef}></div>
            </ChatArea>
            <SendMessage sendMessage={sendMessage}/>
        </StyledChat>
     );
    }
    
    if(!users.find(user => user.id === activeUser)) {
        return (
            <StyledChat>
            <Profile />
            <ChatArea>
                <SearchResults>Select chat</SearchResults>
            </ChatArea>
            <SendMessage sendMessage={sendMessage} scroll={scroll}/>
        </StyledChat>
        )
    }
}
 
export default Chat;