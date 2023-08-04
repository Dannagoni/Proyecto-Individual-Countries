import { Link, useLocation } from "react-router-dom"
import styled from './nav.module.css'
import SearchBar from "../SearchBar/SearchBar";
const NavBar = ({ setSelectedFilters}) => {

    const location = useLocation()
    return (
        <div className={styled.container}>
            <h2 className={styled.title}>🌐  HenryTravel</h2>
            <Link className={styled.linkHome}to='/'>
                <h2 className={styled.buttonBack}>🔙</h2>
            </Link>
            <Link className={styled.linkHome}to='/home'>
                {/* <h2 className={styled.buttonRestart}>🔁</h2> */}
            </Link>
            <button className={styled.buttonHome}>
                <Link className={styled.linkHome}to='/home'>HOME</Link>
            </button>
            <button className={styled.buttonForm}>
                <Link className={styled.linkForm} to='/form'>FORM</Link>
            </button>
            <div className={styled.searchBar}>{location.pathname === "/home"  && <SearchBar setSelectedFilters={setSelectedFilters}/>}</div> 
        </div>
    )
}

export default NavBar;