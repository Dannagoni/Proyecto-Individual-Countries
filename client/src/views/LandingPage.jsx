import { NavLink } from 'react-router-dom'
import styled from './landingPage.module.css'

const LandingPage = () => {
    
    return (
        <div className={styled.background}>
            <button className={styled.button}>
                <NavLink to='/home'>Explore</NavLink>
            </button>
        </div>
    )
}

export default LandingPage;