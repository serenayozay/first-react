import React from 'react'

const City = ({ city }) => {
    console.log(city);
    return (
        <div className="container">
          <div className="top">
            <div className="location">
             <h1>{city.name}</h1>
            </div>
            <div className="temp">
             <h1>Sıcaklık: { city.main.temp} °C</h1> 
            </div>
            <div className="feels_like">
             <h1>Hissedilen Sıcaklık: {city.main.feels_like} °C</h1>
            </div>
            <div className="description">
              <h1>Beklenen Hadise: {city.weather[0].main} </h1>
            </div>
            <div className="wind">
              <h1>Rüzgar Hızı: {city.wind.speed} (km/sa)</h1> 
            </div>
            <div className="humidity">
              <h1>Nem: {city.main.humidity} (%)</h1> 
            </div>
          </div>
        </div>
    );
  };
  

export default City;


 
