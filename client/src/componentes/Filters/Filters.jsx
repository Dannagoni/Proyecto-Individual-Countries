import { useDispatch, useSelector } from "react-redux"
import { getActivities, filterCountries } from "../../Redux/actions";
import { useEffect, useState } from "react";
import styled from './filters.module.css'

//en filter digo que selecciono el usuario
//Cards se ocupa de decidir que renderizar cuando pasa tal cosa
const Filters = ({selectedFilters, setSelectedFilters}) => {
    const dispatch = useDispatch();
    const continents = ["AllCountries", "Asia", "North America", "South America", "Africa", "Antarctica", "Europe", "Oceania"]
    const activities = useSelector((state) => state.allActivities)
    
    useEffect(() => {
        dispatch(getActivities())
    }, [dispatch])

    const handleFilters = (event) => {
        const property = event.target.name
        const value = event.target.value
        dispatch(filterCountries({ ...selectedFilters, [property]: value})) // filtros que seleccione antes y el que acabo de seleccionar // es lo que va a recibir en la action como payload
        setSelectedFilters(prevState => {
            return { ...prevState, [property]: value }
        })
    }

    return (
        <div className={styled.container}>
            <select name='continent' className={styled.filterBycontinents} defaultValue='AllCountries' onChange={(event) => handleFilters(event)}>
                {continents.map(continent => {
                    return <option key={continent} value={continent}>{continent}</option>
                })}
            </select>
            <select name='orderAlphabetic' className={styled.filterByOrderAlphabetic} defaultValue="none" onChange={(event) => handleFilters(event)}>
                <option value="none" disabled hidden>Order by Alphabetic</option>
                <option value="ASC">Ascendente</option>
                <option value="DESC">Descendente</option>
            </select>
            <select name="orderByPopulation" className={styled.filterByOrderPopulation} defaultValue="none" onChange={(event) => handleFilters(event)}>
                <option value="none" disabled hidden>Order by population</option>
                <option value="ASC">population ascending</option>
                <option value="DESC">population descending</option>
            </select>
            <select name='activityId' className={styled.filterByActivity} defaultValue="" onChange={(event) => handleFilters(event)}>
                <option value="" >Select activity</option>
                {activities?.map(activity => {
                    return <option key={activity.id} value={activity.id}>{activity.name}</option>
                })}
            </select>


        </div>
    )
}

export default Filters;