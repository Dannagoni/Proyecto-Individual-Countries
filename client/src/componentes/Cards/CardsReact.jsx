import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card/Card';
import styled from './Cards.module.css'
import { getAllCountries } from '../../Redux/actions';

const CardsReact = () => {
  const countries = useSelector((state) => state.countries);
  const selectedContinent = useSelector((state) => state.selectedContinent);// opcion seleccionada
  const [filteredCountries, setFilteredCountries] = useState([]);//los paises que voy a mostrar dependiendo de la opcion q el usuario elija (selectedContinent)
  
  console.log(filteredCountries)
  
  const dispatch = useDispatch();
  //cuando se monta(useEffect), que haga el dispatch(dispatch())
  // useLayoutEffect
  //selectedContinent por default es AllCountries
  useEffect(() => {
    if (selectedContinent === "AllCountries") {//selectedContinent(es la opcion por ej europa) por default es AllCountries 
      dispatch(getAllCountries())//hago un dispatch de todos los paises 
      // setFinalCountries(countries)//me actualiza el estado local que voy a mostrar con todos los paises
    } else {//SINO
      console.log('entre')
      //hago un filtro y busco los paises por el continente seleccionado
      const filtered = countries.filter(country => country.continent === selectedContinent)
      setFilteredCountries(filtered)//me actualiza el estado local que voy a mostrar con los paises filtrados
    }
  }, [dispatch, selectedContinent])//array de dependencia: cuando cambia el valor de la dependencia se ejecuta el useEffect

  console.log(selectedContinent)
  return (
    <div>
      {(selectedContinent === 'AllCountries' ? countries : filteredCountries)?.sort(() => {
        // if desc
        // apply logic desc
        // if asc
        // apply logic asc
      }).map((country) => (//mapeo toda la data final dependiendo del useEffect
        <Card
          key={country.id}
          id={country.id}
          name={country.name}
          continent={country.continent}
          image={country.flag}
        />
      ))}
      <h1>las CARDS</h1>
    </div>
  );
}

export default CardsReact;

// cuando selecciono una opcion (selectedContinent) por ej europa me devuelve todos los paises filtrados de europa(filteredCountries)
//sino me devuelve todos los paises por default