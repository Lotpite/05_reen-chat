import React from 'react';
import { Avatar, Date, Details, LastMessage, ListName, Main, Name, NavProfile, Online, SearchResults, StyledNavigation } from '../styles/Navigation.styled';
import Login from './Login';
import Searchbox from './Searchbox';
import onlineIcon from "../assets/img/onlineIcon.png";

const Navigation = ({ users, filter, setFilter, activeUser, setActiveUser }) => {
    let usersList = users.map(user => {
    user.updated = new window.Date(user.updated)
    .toLocaleString('en', {
        month: "long",
        day: "numeric",
        year: "numeric"
      })

        return (
            <NavProfile key={user.id} onClick={() => setActiveUser(user.id)} isActive={user.id === activeUser ? true : false}>
                <Details>
                    <Avatar>
                        <img src={user.pic} alt="" />
                        <Online isNavigation={true}>
                            <img src={onlineIcon} alt="" />
                        </Online>
                    </Avatar>
                    <Main>
                        <Name>{user.name}</Name>
                        <LastMessage>{`${user.last_message.slice(0, 29)}${user.last_message.length < 69 ? "" : "..."}`}</LastMessage>
                    </Main>
                </Details>
                <Date>{user.updated}</Date>
            </NavProfile>
        )
    })

    return ( 
        <StyledNavigation>
            <Login/>
            <Searchbox filter={filter} setFilter={setFilter}/>
            <ListName>Chats</ListName>
            { users.length > 0
             ? usersList
             : <SearchResults>No users found</SearchResults> }
        </StyledNavigation>
     );
}
 
export default Navigation;