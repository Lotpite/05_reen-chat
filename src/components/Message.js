import { CreatedDate, MessageDetails, MessageStyled, MessageText } from "../styles/Chat.styled";

const Message = ({ id, isMy, avatar, text, date}) => {
    return ( 
        <MessageStyled key={id} isMy={isMy}>
            <div>
                <img src={avatar} alt="" />
            </div>
            <MessageDetails>
                <MessageText isMy={isMy}>{text}</MessageText> 
                <CreatedDate isMy={isMy}>{date}</CreatedDate>
            </MessageDetails>
        </MessageStyled>
     );
}
 
export default Message;