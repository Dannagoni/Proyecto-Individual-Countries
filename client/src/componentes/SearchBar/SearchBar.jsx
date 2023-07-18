import { useState } from "react"
import { useDispatch } from "react-redux";
import { searchName } from "../../Redux/actions";
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

const SearchBar = () => {

    const dispatch = useDispatch();
    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value)
    }

    const handleClick = () => {
        dispatch(searchName(name))
    }

    return (
        <div className={styled.container}>
            <input className={styled.input} type='search' onChange={handleChange} value={name} />
            <button className={styled.button} onClick={() => { handleClick(); setName('') }}>Buscar</button>
        </div>
    )
}

export default SearchBar;