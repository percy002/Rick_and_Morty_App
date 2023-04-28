import SearchBar from "../SearchBar"
import styled from "styled-components";
import { Link,NavLink } from "react-router-dom";

const NavBar = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;

`;

function Nav(props) {
  return (
    <NavBar>
        <div>Rick And Mrty</div>
        <button>
            <NavLink to='/home'>
              Home
            </NavLink>
          </button>
        <button>
          <NavLink to='/about'>
              About
            </NavLink></button>
        <button>
        <NavLink to='/favorites'>
              Favorites
            </NavLink>
        </button>
        <p>Random</p>
        <SearchBar onSearch={props.onSearch}/>
    </NavBar>
  )
}
export default Nav