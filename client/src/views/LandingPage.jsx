import { Link } from 'react-router-dom'
import styled from './landingPage.module.css'

const LandingPage = () => {
    
    return (
        <div className={styled.background}>
            <button className={styled.button}>
                <Link className={styled.link} to='/home'>EXPLORE</Link>
            </button>
        </div>
    )
}

export default LandingPage;