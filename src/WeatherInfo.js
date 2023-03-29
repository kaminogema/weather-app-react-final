import React from "react";
import "./WeatherInfo.css";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
<div className="city-name">
                <h1>{props.data.city}</h1>
            <ul>
                    <li>Last updated: {" "}
                        <FormattedDate date={props.data.date} />
                    </li>
                    <li className="text-capitalize">{props.data.description}</li>
            </ul>    
            </div>
            
            <div className="row mt-3">
                <div className="col-6">
                    <img src={props.data.iconUrl} alt={props.data.description} />         
                    <span className="temperature">{Math.round(props.data.temperature)}</span>
                    <span className="unit">°C | °F</span>                   
                </div>
                <div className="col-6">
                    <ul>
                        <li>
                        Humidity: {Math.round(props.data.humidity)}%   
                        </li>
                        <li>
                        Wind: {Math.round(props.data.wind)} km/h
                        </li>
</ul>
                </div>
            </div>
        </div>
    )
}