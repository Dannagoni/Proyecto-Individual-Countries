import React, { useEffect, useState } from 'react'
import Card from '../Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries } from '../../Redux/actions';

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
        if (firstIndex === allThecountries) return;
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
            <h1>Pagina: {currentPage}</h1>
            <button onClick={previousHandler}>previous</button>
            <button onClick={nextHandler}>next</button>
            <div>
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
        </div>
    )
}

export default paginado;
