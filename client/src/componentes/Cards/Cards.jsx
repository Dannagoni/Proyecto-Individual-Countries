import React, { useEffect, useState } from 'react'
import Card from '../Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries } from '../../Redux/actions';
import styled from './cards.module.css'

const paginado = () => {
    const NUM_ITEMS = 10
    const countries = useSelector((state) => state.filteredCountries);

    const dispatch = useDispatch();
    useEffect(() => {
        if (!countries.length) {
            dispatch(getAllCountries())
        } else {
            setCountriesItems([...countries.slice(0, NUM_ITEMS)])
        }
    }, [dispatch, countries])

    const [countriesItems, setCountriesItems] = useState()
    const [currentPage, setCurrentPage] = useState(0)
    
    const nextHandler = () => {
        const allThecountries = countries.length;
        const nextPage = currentPage + 1
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
            </div>
            <h1 className={styled.titlePage}>{currentPage}</h1>
            <button className={styled.buttonPrevious} onClick={previousHandler}>previous</button>
            <button className={styled.buttonNext} onClick={nextHandler}>next</button>
        </div>
    )
}

export default paginado;


// cuando selecciono una opcion (selectedContinent) por ej europa me devuelve todos los paises filtrados de europa(filteredCountries)
//sino me devuelve todos los paises por default