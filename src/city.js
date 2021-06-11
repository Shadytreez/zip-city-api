import React from 'react';
import './App.css';

function City(props){
    return(
        <div className="content">
            <h1>{props.city.LocationText}</h1>
            <ul>
                <li>State: {props.city.State}</li>
                <li>Location: {props.city.Lat} {props.city.Long}</li>
                <li>Population: {props.city.EstimatedPopulation}</li>
                <li>Total Wages: {props.city.TotalWages}</li>
            </ul>
        </div>
    )
}

export default City;