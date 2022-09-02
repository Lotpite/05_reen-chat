import styled from "styled-components";


export const StyledChat = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 80%;  
`

export const ProfileStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-grow: 0.2;
    padding-left: 10px;
    border-raidus: 50%;
    background-color: #F5F5F5;

    img {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background: transparent;
        display: ${({isEmpty}) => isEmpty === true ? "none" : ""}
    }

    p {
        font-size: 18px;
    }
`

export const ChatArea = styled.div`
    background-color: #FFFFFF;  
    display: flex;
    flex-direction: column;
    border-top: 1px solid grey;
    flex-grow: 2;
    height: 50%;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 8px;
    }
    
    ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
    border-radius: 10px;
    }
    
    ::-webkit-scrollbar-thumb {
    background: #1DC2DF; 
    border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
    background: #23B0FF; 
    }

`
export const MessageStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: ${({isMy}) => isMy === true ? "flex-start" : "flex-end"};
    margin: 10px;
    img {
        display: ${({isMy}) => isMy === true ? "" : "none"};
        width: 35px;
        height: 35px;
    }
`

export const MessageDetails = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px;

`

export const MessageText = styled.div`
    background-color: ${({isMy}) => isMy === true ? "#3C4153" : "#E0E0E0"};
    color: ${({isMy}) => isMy === true ? "#FFFFFF" : "black"};
    border-radius: 10px;
    padding: 5px 10px 5px 10px;
    word-break: break-word;
    text-align: ${({isMy}) => isMy === true ? "left" : "right"}
`

export const CreatedDate = styled.p`
    font-size: 10px;
    align-self: ${({isMy}) => isMy === true ? "flex-start" : "flex-end"};
    margin: 5px;
    color: grey;
`

export const ChatForm = styled.div`
    display: flex;
    align-items: center;
    border-top: 1px solid grey;
    flex-grow: 0.2;
    background-color: #F5F5F5;
    justify-content: center;

`

export const StyledForm = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    background: transparent;
`

export const StyledInput = styled.input`
    width: 74vw;
    height: 50px;
    border-radius: 20px;
    padding-left: 10px;
`

export const SubmitButton = styled.div`
    position: absolute;
    left: 95%;
    border-radius: 50%;
    background: transparent;
    margin-top: 6px;

    @media (max-width: 860px) {
        left: 90%;
    }

    img {
        background: transparent;
        :hover {
            transform: scale(1.2);
            cursor: pointer;
    }

    
`
export const StyledSubmit = styled.input`
    display: none;
`