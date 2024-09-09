"use client"

import React, { useEffect, useRef, useState } from 'react';
import './weather.css'
import Search from '../../assets/search.png';

import Sunny from '../../assets/sunny.png';
import Cloudy from '../../assets/cloudy.png';
import Drizzle from '../../assets/drizzle.png';
import Humid from '../../assets/humid.png';
import Overshadow from '../../assets/overshadow.png';
import Rain from '../../assets/rain.png';
import Snow from '../../assets/snow.png';
import Wind from '../../assets/wind.png';
import Image from 'next/image';

const Weather = () => {

  const inputRef = useRef()
  const [weatherData, setWeatherData] = useState(false);

  const allIcons = {
    "01d": Sunny,
    "01n": Sunny,
    "02d": Cloudy,
    "02n": Cloudy,
    "03d": Drizzle,
    "03n": Drizzle,
    "04d": Humid,
    "04n": Humid,
    "09n": Overshadow,
    "09d": Overshadow,
    "10d": Rain,
    "10n": Rain,
    "13d": Snow,
    "13n": Snow
  }

  async function search(city) {
    if (city === "") {
      alert("Enter city name");
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_REACT_APP_API_KEY}`;

      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      const icon = allIcons[data.weather[0].icon] || Sunny;
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon
      })
    } catch (error) {
      setWeatherData(false);
      console.error("Error in fetching weather data");
    }
  }

  useEffect(() => {
    search("");
  }, [])

  return (
    <div className='weather'>
      <div className='search-bar'>
        <input ref={inputRef} type='text' placeholder='Search' />
        <Image
          src={Search}
          height={40}
          width={40}
          alt="Search Icon"
          onClick={() => search(inputRef.current.value)} />
      </div>
      {weatherData ? <>
        <Image src={weatherData.icon} alt='Sunny icon' className='weather-icon' />
        <p className='temperature'>{weatherData.temperature}°C</p>
        <p className='location'>{weatherData.location}</p>
        <div className='weather-data'>
          <div className='col' style={{ marginRight: "80px" }}>
            <Image src={Humid}
              width={26}
              margin-top={10}
              alt='Humid icon' />
            <div>
              <p>{weatherData.humidity}%</p>
              <span>Humidity</span>
            </div>
          </div>
          <div className='col'>
            <Image src={Wind}
              width={26}
              margin-top={10}
              padding={20}
              alt='Wind icon' />
            <div>
              <p>{weatherData.windSpeed} Kmph</p>
              <span>Wind Speed</span>
            </div>
          </div>
        </div>
      </> : <></>}

    </div>
  )
}

export default Weather