import styled from "styled-components";

export const StyledNavigation = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    border-right: 1px solid grey;
`

export const NavProfile = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    :hover {
        cursor: pointer;
    }

    border-bottom: 1px solid lightgrey;
    padding: 10px;
    background-color: ${({isActive}) => isActive === true ? "lightblue" : "#FFFFFF"};

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const Details = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background: transparent;
    width: 72%;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
     width: 90%;

    }
`

export const Avatar = styled.div`
    background: transparent;
    position: relative;
    img {
        background: transparent;
        width: 24px;
        height: 24px;
        border-radius: 50%;
    }
`

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    background: transparent;
`

export const Name = styled.div`
    font-size: 18px;
    background: transparent;

    @media (max-width: 768px) {
        font-size: 16px;
        text-align: center;
    }
`

export const Date = styled.div`
    font-size: 12px;
    background: transparent;
    margin-left: 6px;

    @media (max-width: 768px) {
        text-align: center;
        margin: 0;
    }
`

export const LastMessage = styled.div`
    font-size: 14px;
    margin-top: 5px;
    color: grey;
    background: transparent;
    word-break: normal;
    // height: 25px;

    @media (max-width: 768px) {
        font-size: 12px;
        text-align: center;
    }
`

export const SearchResults = styled.h4`
    margin-top: 20%;
    text-align: center;

`

export const ListName = styled.h2`
    margin: 10px;
    color: #1DC2DF;
`

export const LoginStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #F5F5F5;
    padding: 10px 0 0 10px;
    align-items: center;

    @media (max-width: 860px) {
        flex-direction: column;
    }
`

export const UserName = styled.div`
    font-size: 18px;
    margin-left: 5px;
    background: transparent;
    margin-bottom: 5px;

    @media (max-width: 860px) {
        text-align: center;
        font-size: 16px;
    }
`

export const LoginPic = styled.div`
    background: transparent;
    position: relative;

    img {
        width: 50px;
        height: 50px;
        background: transparent;
    }
`

export const LoignDetails = styled.div`
    display: flex;
    flex-direction: column;
    background: transparent;
    margin-right: 10px;
`

export const LoginButton = styled.button`
    display: flex;
    justify-content: center;
    width: 50%;
    align-self: flex-end;
    border-radius: 10px;
    font-size: 12px;
    padding: 3px;

    :hover {
        cursor: pointer;
    }

    @media (max-width: 860px) {
        align-self: center;
    }
`

export const Online = styled.div`
    position: absolute;
    background: transparent;
    right: -10px;
    bottom: -5px;
    img {
        width: 20px;
        height: 20px;
        background: transparent;
    }
`

