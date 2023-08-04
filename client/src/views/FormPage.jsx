import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from './formPage.module.css'
import { addActivity } from "../Redux/actions";
import NavBar from "../componentes/NavBar/NavBar";
import {useNavigate } from 'react-router-dom'
import validation from "../componentes/validation/Validation";
// import imageSrcForm from "../images/2.png"

function FormPage() {
    const countries = useSelector((state) => state.countries);
    const [errors, setErrors] = useState ({});
    const [inputs, setInputs] = useState({
        name: '',
        duration: null,
        season: '',
        difficulty: '',
        countriesIds: []
    });

    const dispatch = useDispatch();
    const navigate = useNavigate()
    
    const handleChange= (event) => {
        const property = event.target.name;
        console.log(property)
        const value = event.target.value
        if (property === 'countriesIds') {
            setInputs({...inputs, [property]: Array.from(event.target.selectedOptions, option => option.value)})//array from  para convertir las opciones seleccionadas en un array 
        } else {
            setInputs({...inputs,[property]:value})
        }
    }
    const submitHandler= (event) =>{
        event.preventDefault()
        const validations = validation(inputs)
        if(validations.existErrors) {
            setErrors(validations.errors)
        } else {
            dispatch(addActivity(inputs))
            alert('¡You have created your activity successfully!')
            navigate('/home')
        }
    }
    
    // to do
    const durations = [{label:"1hs", value: 1}, {label:"1:30hs",value: 2 }, {label:"2hs",value: 3 }, {label:"2:30",value: 4 }, {label:"3hs",value: 5 }, {label:"3:30hs",value: 6 }, {label:"4hs",value: 7 }, {label:"8hs",value: 8 }]
    const seasons = ['Summer', 'Autumn', 'Winter', 'Spring']
    const difficulties = ['1', '2', '3', '4', '5']

    return (
        <div className={styled.containerform}>
            <NavBar/>
            {/* <div className={styled.imageForm} style={{ backgroundImage: `url(${imageSrcForm})` }}></div> */}
            <div className={styled.container}>
            <div className={styled.container2}>
            <h1 className={styled.logo}>🌐</h1>
            <h1 className={styled.title}>¡CREATE YOUR ACTIVITY!</h1>
            <form onSubmit={submitHandler} className={styled.form}>
                <div className={styled.inputsContainer}>
                <label htmlFor="name">Name:</label>
                <input type='search' name="name" value={inputs.name} onChange={handleChange} className={styled.input} id='name'></input>
                </div>
                {errors.name && <p className={styled.errorMessage}>{errors.name}</p>}
                <div className={styled.inputsContainer}>
                <label className={styled.labelSeason} htmlFor="season">Season:</label>
                <select name="season" defaultValue="none" onChange={handleChange} id="season">
                <option className={styled.optionSeason}value="none" disabled hidden>Select an Option</option>
                    {seasons.map(season => {
                        return <option key={season} value={season}>{season}</option>
                    })}
                </select>
                </div>
                {errors.season && <p className={styled.errorMessage}>{errors.season}</p>}

                <div className={styled.inputsContainer}>
                <label className = {styled.labelCountries}htmlFor="countriesIds">Countries:</label>
                <select  name='countriesIds' onChange={handleChange} id="countriesIds" multiple>
                    {countries.sort((a,b) => a.name.localeCompare(b.name)).map(country => {
                        return <option key={country.name} value={country.id}>{country.name}</option>
                    })}
                </select>
                </div>
                {errors.countriesIds && <p className={styled.errorMessage}>{errors.countriesIds}</p>}

                <div className={styled.inputsContainer}>
                <label htmlFor="duration">Duration:</label>
                <select name='duration'  defaultValue="none" onChange={handleChange} id='duration'>
                <option value="none" disabled hidden>Select an Option</option>
                    {durations.map(duration => {
                        return <option key={duration.label} value={duration.value}>{duration.label}</option>
                    })}
                </select>
                </div>
                {errors.duration && <p className={styled.errorMessage}>{errors.duration}</p>}

                <div className={styled.inputsContainer}>
                <label htmlFor="difficulty">Difficulty:</label>
                <select name='difficulty' defaultValue="none"onChange={handleChange} id='difficulty'>
                <option value="none" disabled hidden>Select an Option</option>
                    {difficulties.map(difficulty => {
                        return <option key={difficulty} value={difficulty}>{difficulty}</option>
                    })}
                </select>
                </div>
                {errors.difficulty && <p className={styled.errorMessage}>{errors.difficulty}</p>}
               <button className={styled.button}>Create</button>
            </form>
            </div>
            </div>
        </div>
    )
}

export default FormPage;

//quiero poder seleccionar un pais
//cada pais es una opcion
//cuando selecciono el pais le voy a crear una actividad
//para eso voy a necesitar un estado inicial de las actividades
//


                    
                    
                    
                    
                    
// const countries = useSelector((state) => state.countries);





//cuando se hace click en el boton submit, se ejecuta la funcion submitHandler
//que hace esa funcion? un dispatch de la action 
//que hace la action pasa la data q se ingreso a la url, osea al back, el back es quien guarda la data en la base de datos
