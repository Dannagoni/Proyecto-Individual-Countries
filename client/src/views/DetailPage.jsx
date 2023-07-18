import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCountryDetail } from "../Redux/actions";
import NavBar from "../componentes/NavBar/NavBar";
import styled from './detailPage.module.css'

function DetailPage() {

    const { id } = useParams();

    const dispatch = useDispatch();
    const countryDetail = useSelector((state) => state.countryDetails)
    useEffect(() => {
        dispatch(getCountryDetail(id))
    }, [dispatch])

    return countryDetail && (
        <div className={styled.background}>
            <NavBar />
            <div>
                <img className={styled.image} src={countryDetail.flag} alt={countryDetail.flag} />
                <div className={styled.containerH2}>
                    <h2>ID: {countryDetail.id}</h2>
                    <h2>Country: {countryDetail.name}</h2>
                    <h2>Continent: {countryDetail.continent}</h2>
                    <h2>Capital: {countryDetail.capital}</h2>
                    <h2>Subregion: {countryDetail.subregion}</h2>
                    <h2>Area: {countryDetail.area}</h2>
                    <h2>Population: {countryDetail.population}</h2>
                    <h2>Activities: {countryDetail?.Activities?.map(activity => {
                        return <p key= {    activity.name}>{activity.name}</p>
                    })}</h2>
                </div>
            </div>
        </div>
    )
}

export default DetailPage;