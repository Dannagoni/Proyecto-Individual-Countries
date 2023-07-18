import { NavLink, useLocation } from "react-router-dom"
import styled from './nav.module.css'
import SearchBar from "../SearchBar/SearchBar";
const NavBar = () => {
    const location = useLocation()
    return (
        <div className={styled.container}>
            <button className={styled.buttonHome}>
                <NavLink to='/home'>HOME</NavLink>
            </button>
            <button className={styled.buttonForm}>
                <NavLink to='/form'>FORM</NavLink>
            </button>
            <div className={styled.searchBar}>{location.pathname === "/home"  && <SearchBar/>}</div> 
        </div>
    )
}

export default NavBar;