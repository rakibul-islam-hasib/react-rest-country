import React from 'react';
import './Country.css'
const Country = (prop) => {
    console.log(prop.country);
    const { name, area, population } = prop.country
    return (
        <div className='country-box'>
            <h1>Name : {name.common}</h1>
            <p>Area : {area}</p>
            <p><small>Population : {population}</small></p>
        </div>
    );
};

export default Country;