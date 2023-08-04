import { useState } from "react"
import { useDispatch } from "react-redux";
import { filterCountries, getAllCountries, searchName } from "../../Redux/actions";
import styled from './searchBar.module.css'

// const SearchBar = () => {

//     // const [name, setName] = useState('');

//     // const handleChange = (event) => {
//     //     setName(event.target.value)
//     // }

//     // const handleClick = async() => {}

//     return (
//         <div>
//             {/* <input type="search" value={name} onChange= {handleChange}/>
//             <button>Agregar</button> */}
//         </div>
//     )
// }

// export default SearchBar;

const SearchBar = ({setSelectedFilters}) => {

    const dispatch = useDispatch();
    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value)
    }

    const handleClick = () => {
        if(name.trim().length){
            setSelectedFilters( { continent: 'AllCountries', orderAlphabetic: '', orderByPopulation: '', activityId: '' })
            dispatch(searchName(name))
        } else {
            dispatch(getAllCountries())
        }
    }

    return (
        <div className={styled.container}>
            <input className={styled.input} type='search' onChange={handleChange} value={name} />
            <button className={styled.button} onClick={() => { handleClick(); setName('') }}>Buscar</button>
        </div>
    )
}

export default SearchBar;