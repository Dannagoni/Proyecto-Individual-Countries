import Cards from "../componentes/Cards/Cards";
import Filters from "../componentes/Filters/Filters";
import styled from './homePage.module.css'
import NavBar from "../componentes/NavBar/NavBar";
import Paginado from "../componentes/Paginado/Paginado"

function HomePage() {

    return (
        <div className={styled.background} >
            <NavBar/>
            <Filters/>
            {/* <Paginado/> */}
            <Cards/>


        </div>
    )
}

export default HomePage;