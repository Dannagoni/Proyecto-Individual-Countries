import Cards from "../componentes/Cards/Cards";
import Filters from "../componentes/Filters/Filters";
import styled from './homePage.module.css'
import NavBar from "../componentes/NavBar/NavBar";
import { useState } from "react";

function HomePage() {
    const [selectedFilters, setSelectedFilters] = useState({ continent: 'AllCountries', orderAlphabetic: '', orderByPopulation: '', activityId: '' })
    // Estoy guardando lo que el usuario va seleccionando para despues filtrar por todos juntos en simultaneo.
    
    return (
        <div className={styled.background} >
            <NavBar setSelectedFilters={setSelectedFilters}/>
            <Filters selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters}/>
            {/* <Paginado/> */}
            <Cards/>


        </div>
    )
}

export default HomePage;