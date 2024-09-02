import React from 'react';
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
  return (
    <div className='weather'>
      <div className='search-bar'>
        <input type='text' placeholder='Search' />
        <Image
          src={Search}
          height={40}
          width={40}
          alt="Search Icon" />
      </div>
      <Image src={Sunny} alt='Sunny icon' className='weather-icon' />
      <p className='temperature'>16°C</p>
      <p className='location'>London</p>
      <div className='weather-data'>
        <div className='col'>
          <Image src={Humid}
            width={26}
            margin-top={10} 
            alt='Humid icon' />
          <div>
            <p>91%</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className='col'>
          <Image src={Wind} 
          width={26}
          margin-top={10}
          alt='Wind icon' />
          <div>
            <p>3.6 Kmph</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather