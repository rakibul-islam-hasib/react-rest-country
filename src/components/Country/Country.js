import React from 'react';
import './Country.css'
const Country = (prop) => {
    console.log(prop);
    return (
        <div className='country-box'>
            <h1>Name : {prop.name}</h1>
            <p>Area : {prop.area}</p>
            <p><small>Population : {prop.population}</small></p>
        </div>
    );
};

export default Country;