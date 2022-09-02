import { ProfileStyled } from "../styles/Chat.styled";
import { Avatar, Main, Name, Online } from "../styles/Navigation.styled";
import onlineIcon from "../assets/img/onlineIcon.png";

const Profile = ({ avatar, name, isNavigation }) => {
    console.log(name)
    return ( 
        <ProfileStyled isNavigation={isNavigation} isEmpty={name === undefined ? true : false}>  
            <Avatar>
                <img src={avatar} alt="" />
                <Online>
                        <img src={onlineIcon} alt="" />
                </Online>
            </Avatar>
            <Main>
                <Name>{name}</Name>
            </Main>
        </ProfileStyled>
     );
}
 
export default Profile;