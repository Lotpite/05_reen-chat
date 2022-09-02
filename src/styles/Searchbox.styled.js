import styled from "styled-components";

export const SearchboxStyled = styled.div`
    display: flex;
    justify-content: center;
    background-color: #F5F5F5;
    border-bottom: 1px solid grey;
    align-items: center;
    height: 8%;
`

export const StyledSearch = styled.input`
    border-radius: 10px;
    width: 94%;
    height: 40%;
    padding: 0 5px 0 25px;
`

export const SearchIcon = styled.div`
    display: flex;
    position: absolute;
    // margin-left: -20px;
    left: 1.3%;

    @media (max-width: 860px) {
    left: 2.2%;
    }
`