import { useState } from "react";
import { auth } from '../services/Firebase'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { LoginButton, LoginPic, LoginStyled, LoignDetails, Online, UserName } from "../styles/Navigation.styled";
import anonymosIcon from "../assets/img/anonymousIcon.png";
import onlineIcon from "../assets/img/onlineIcon.png";

const Login = () => {
    
    const [signedUser, setSignedUser] = useState({name: 'Anonymous', pic: anonymosIcon});

    const logIn = async () => {
        const provider = new GoogleAuthProvider();
        await signInWithPopup (auth, provider)
        .then(res => {
            setSignedUser(userSigned => {
                return {
                    ...userSigned,
                    name: res.user.displayName,
                    pic: res.user.photoURL
                }
            })
        })
        .catch(error => console.log(error))
    } 

   const logOut = () => {
    setSignedUser(userSigned => {
        return {
            ...userSigned,
            name: "Anonymous",
            pic: anonymosIcon
        }
    })
   }

    return ( 
        <LoginStyled>
                <LoginPic>
                    <img src={signedUser.name === "Anonymous" ? signedUser.pic : signedUser.pic} alt="" />
                    <Online>
                        <img src={onlineIcon} alt="" />
                    </Online>
                </LoginPic>
                <LoignDetails>
                    <UserName>{signedUser.name}</UserName> 
                    <LoginButton onClick={() => signedUser.name === "Anonymous" ? logIn() : logOut()}>{signedUser.name === "Anonymous" ? "Log in" : "Log out"}</LoginButton>
                </LoignDetails>
                    
        </LoginStyled>
     );
}
 
export default Login;