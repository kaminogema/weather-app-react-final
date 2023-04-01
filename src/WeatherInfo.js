import React from "react";
import "./WeatherInfo.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";


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
                    <WeatherIcon code={props.data.icon} size={60} />
                    <WeatherTemperature celsius={props.data.temperature} />                  
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