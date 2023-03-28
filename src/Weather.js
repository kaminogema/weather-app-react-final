import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState({ ready: false});
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            city: response.data.name,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            iconUrl: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAjdJREFUeNrtmsGtgzAMhjtCRmAERsgIHYFjjx2BERiBEToCI+TaG2+DbJBnKj8pD1Eaiv8AwpX+C1Ap/hzHjpNLCOFyZl0UgAJQAApAASgABaAAFIACODEA9C/83AypIrUkRwpv5Pib4dsCNp5cAMgIS3rMGPxJw3/t4QDQoEtSt8LwsTpJEFAAAONjNUM4HSIEOO7vJC8Mwa2FkHURZBDSM2KAWu4CwPP5LEgtyZMCy/OzIgKBgGA2BUAGliPDxxreldFM2EU4JAOgwRtSPeHdmj0/Z3z8fcEQasTCiATgEgxMURvNAkR2sOIA2MtBSH60KNbC4dAhAHhBACFDdrBiADj2A0DI7PA4AgB0dihWAaBBXUk92Hhkdqi+BsDGh8ySzg7tGgD9BgC88FrgvgKQIeY/ZgepxXB3m6EFm6bm7ADqQwDggSLUHQVA2KG6P50JQJ+a96UBuC08OwqRerOWGPftkUa7Oc/GrTBKo5b0mEivwzOLAlABjb8v6EY1CXVGgwCAampUqZ5NNP5fuS1aB6w87Zn1PG+XpStOKw3AIro5IONfM0e8EhRsZFxz7EYRACRmgQc0YPMAENrAdJk6UBgAKwojz/W/yQUgXgilARguS5dUd2Yir+foPzSQ7TAfifdLOjZvzhSzQID0A3gmuJTDzIQzRXg4IC9IvFsY68jzWxr/qgvQV2TsRJ1gwMXOIuW+JNWhjtx2DWCDE6fvAOhNUQWgABSAAlAACkABKAAFoABOp1+6Bd0LJ+BorgAAAABJRU5ErkJggg==`,
            date: "Monday 22:00"
        })
}

    if (weatherData.ready) {
    return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-8">
                 <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" />       
                    </div>
                    <div className="col-4">
                 <input type="submit" value="Search" className="btn btn-primary w-100"/>                             
                 </div>           
                </div>
            </form>
            <div className="city-name">
                <h1>{weatherData.city}</h1>
            <ul>
                <li>Last updated: {weatherData.date}</li>
                    <li className="text-capitalize">{weatherData.description}</li>
            </ul>    
            </div>
            
            <div className="row mt-3">
                <div className="col-6">
                    <img src={weatherData.iconUrl} alt={weatherData.description} />         
                    <span className="temperature">{Math.round(weatherData.temperature)}</span>
                    <span className="unit">°C | °F</span>                   
                </div>
                <div className="col-6">
                    <ul>
                        <li>
                        Humidity: {Math.round(weatherData.humidity)}%   
                        </li>
                        <li>
                        Wind: {Math.round(weatherData.wind)} km/h
                        </li>
</ul>
                </div>
            </div>
        </div>
    )    
    } else {
    const apiKey = "6782253072f7d90462731a624097fc54";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);    
    }   
    return "Loading...";
}