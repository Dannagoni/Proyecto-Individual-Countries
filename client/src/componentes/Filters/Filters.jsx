import { useDispatch, useSelector } from "react-redux"
import { getActivities, filterCountries } from "../../Redux/actions";
import { useEffect, useState } from "react";
import styled from './filters.module.css'

//en filter digo que selecciono el usuario
//Cards se ocupa de decidir que renderizar cuando pasa tal cosa
const Filters = () => {
    const dispatch = useDispatch();
    const continents = ["AllCountries", "Asia", "North America", "South America", "Africa", "Antarctica", "Europe", "Oceania"]
    const activities = useSelector((state) => state.allActivities)
    const [selectedFilters, setSelectedFilters] = useState({ continent: 'AllCountries', order: '', activity: '' })

    useEffect(() => {
        dispatch(getActivities())
    }, [dispatch])

    const handleFilterContinent = (event) => {
        const value = event.target.value
        dispatch(filterCountries({continent: value, activityId: selectedFilters.activity, order: selectedFilters.order}))
        setSelectedFilters(prevState => { 
            return { ...prevState, continent: value } 
        })
    }
    const handleFilterOrder = (event) => {
        const value = event.target.value
        dispatch(filterCountries({continent: selectedFilters.continent, activityId: selectedFilters.activity, order: value}));
        setSelectedFilters(prevState => { 
            return { ...prevState, order: value } 
        })
    };
    const handleFilterActivities = (event) => {
        const value = event.target.value
        dispatch(filterCountries({activityId: value, continent: selectedFilters.continent,order: selectedFilters.order})); // activity id
        setSelectedFilters(prevState => { 
            return { ...prevState, activity: value } 
        })
        //dispatch action filter by activities
    }


    return (
        <div className={styled.container}>
            <select className={styled.filterBycontinents} defaultValue='AllCountries'onChange={(event) => handleFilterContinent(event)}>
                {continents.map(continent => {
                    return <option key={continent} value={continent}>{continent}</option>
                })}
            </select>
            <select className={styled.filterByOrder} defaultValue="none" onChange={(event) => handleFilterOrder(event)}>
                <option value="none" disabled hidden>Select order</option>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
                <option value="Ascendente de poblacion">Ascendente de poblacion</option>
                <option value="Descendente de poblacion">Descendente de poblacion</option>
            </select>
            <select className={styled.filterByActivity} defaultValue="none" onChange={(event) => handleFilterActivities(event)}>
                <option value="none" disabled hidden>Select activity</option>
                {activities?.map(activity => {
                    return <option key={activity.id} value={activity.id}>{activity.name}</option>
                })}
            </select>


        </div>
    )
}

export default Filters;