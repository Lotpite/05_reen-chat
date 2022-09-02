import { useState } from "react";
import { ChatForm, StyledForm, StyledInput, StyledSubmit, SubmitButton } from "../styles/Chat.styled";
import sendIcon from '../assets/img/sendIcon.png'

const SendMessage = ({ sendMessage }) => {

    let [message, setMessage] = useState('');

    const createMessage = (e, message) => {
        e.preventDefault()
        sendMessage(message, false)
        setMessage('')
    }

    return ( 
        <ChatForm>
            <StyledForm action="">
                <StyledInput type="text" placeholder="Type your message" value={message} onChange={(e) => setMessage(e.target.value)}/>
                <StyledSubmit type="submit" value="Send" onClick={(e) => createMessage(e, message)}/>
                <SubmitButton  type="submit"onClick={(e) => createMessage(e, message)}>
                    <img src={sendIcon} alt="" />
                </SubmitButton>
            </StyledForm>
                
        </ChatForm>
     );
}
 
export default SendMessage;