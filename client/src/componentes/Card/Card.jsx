import React from 'react';
import styled from './Card.module.css';
import { Link } from 'react-router-dom';

const Card = ({id, name, image, continent}) => {
    return (
        <Link to={`/detail/${id}`}>
        <div className={styled.containerprincipal}>
        <div className={styled.cardContainer}>
        {/* <div className={styled.imageTierraLogo} style={{ backgroundImage: `url(${imageSrcTierra})` }}></div> */}
            <h2 className={styled.h2Country}>country:</h2>
            <h2 className={styled.h2Name}>{name}</h2>
            <img className ={styled.image}src={image} alt='' />
            <h2 className={styled.h2Continent}>{continent}</h2>
        </div>
        </div>
        </Link>
    )
}
//componente dumb: componente presentacional
export default Card;
