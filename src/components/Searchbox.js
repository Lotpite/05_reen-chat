import { SearchboxStyled, SearchIcon, StyledSearch } from "../styles/Searchbox.styled";
import searchIcon from '../assets/img/searchIcon.png'

const Searchbox = ({filter, setFilter}) => {
    return ( 
        <SearchboxStyled>
            <SearchIcon>
                <img src={searchIcon} alt="" />
            </SearchIcon>
            <StyledSearch type="text" placeholder="Search or start new chat" onChange={(e) => setFilter(e.target.value)}/>
        </SearchboxStyled>
     );
}
 
export default Searchbox;