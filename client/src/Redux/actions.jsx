import axios from 'axios'
import {
    GET_ALL_COUNTRIES,
    SEARCH_NAME,
    GET_COUNTRY_DETAIL,
    ADD_ACTIVITY,
    FILTER_BY,
    GET_ACTIVITIES,
} from './actions-type'

export const getAllCountries = () => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get('http://localhost:3001/countries')

            if(data.length) return dispatch({type:GET_ALL_COUNTRIES, payload: data})


        } catch (error) {
            console.log(error)
        }
    }
}
export const searchName = (name) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`http://localhost:3001/countries/name?name=${name}`)

            if(data.length) return dispatch({type:SEARCH_NAME, payload: data})
        } catch (error) {
            console.log(error)
        }
    }
}
export const getCountryDetail = (id) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`http://localhost:3001/countries/${id}`)
            return dispatch({type:GET_COUNTRY_DETAIL, payload: data})
           
        } catch (error) {
            console.log(error)
        }
    }
}
// payload contiene el valor del continente por el cual deseas filtrar los países (por ej ascendente)

export const addActivity = (activitiesData) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.post("http://localhost:3001/activities", activitiesData)
            
            return dispatch({type: ADD_ACTIVITY, payload: data})

        } catch (error) {
            console.log(error)
        }
    }
}
export const getActivities = () => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get("http://localhost:3001/activities")
            return dispatch({type: GET_ACTIVITIES, payload: data})
        } catch (error) {
            console.log(error)
        }
    }
}
export const filterCountries = (payload) => {
    return async (dispatch) => {
    return dispatch({type: FILTER_BY, payload})
    }
}


//selecciono todos los continentes
//cuando yo toco la opcion ascendente se me ordena por orden alfabetico de la a-z
//cuando yo toco la opcion descendente se me ordena por orden alfabetico de la z-a