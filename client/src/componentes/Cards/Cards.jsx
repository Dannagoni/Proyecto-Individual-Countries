import React, { useEffect, useState } from 'react'
import Card from '../Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries } from '../../Redux/actions';
import styled from './cards.module.css'

const paginado = () => {
    const NUM_ITEMS = 10
    const countries = useSelector((state) => state.countries);
    const dispatch = useDispatch();
    const [countriesItems, setCountriesItems] = useState()
    const [currentPage, setCurrentPage] = useState(0)

    useEffect(() => {
            dispatch(getAllCountries())
    }, [dispatch])
    useEffect(() => {
            setCountriesItems([...countries.slice(0, NUM_ITEMS)])
            setCurrentPage(0)
    }, [countries])

    
    const nextHandler = () => {
        const allThecountries = countries.length;
        const nextPage = currentPage + 1//3
        const firstIndex = currentPage === 0 ? countriesItems.length - 1 : (nextPage * NUM_ITEMS) - 1
        if (firstIndex + 1 === allThecountries) return
        setCountriesItems([...countries.slice(firstIndex, firstIndex + NUM_ITEMS)])
        setCurrentPage(nextPage)
    }
    const previousHandler = () => {
        const prevPage = currentPage - 1
        if (prevPage < 0) return;
        const firstIndex = prevPage === 0 ? prevPage : (prevPage * NUM_ITEMS) - 1
        setCountriesItems([...countries.slice(firstIndex, firstIndex + NUM_ITEMS)])
        setCurrentPage(prevPage)
    }

    return (
        <div>
            
            <div className={styled.container}>
            {/* <div className={styled.imagePlane} style={{ backgroundImage: `url(${imageSrc})` }}></div> */}
                {countriesItems?.map((country) => (
                    <Card
                        key={country.id}
                        id={country.id}
                        name={country.name}
                        continent={country.continent}
                        image={country.flag}
                    />
                ))}
                {!countriesItems?.length && <div className={styled.containerAlert}> <h2 className={styled.alert}>No countries matched with selection</h2></div>}
            </div>
            <h1 className={styled.titlePage}>{currentPage}</h1>
            <button className={styled.buttonPrevious} onClick={previousHandler}>◀</button>
            <button className={styled.buttonNext} onClick={nextHandler}>▶</button>
        </div>
    )
}

export default paginado;


// cuando selecciono una opcion (selectedContinent) por ej europa me devuelve todos los paises filtrados de europa(countries)
//sino me devuelve todos los paises por default