// import React, { useEffect, useState } from 'react'
// import './Weather.css'

// const Weather = () => {

//     const [city, setCity] = useState();
//     const [search, setSearch] = useState();

//     useEffect(() => {
//         const fetchApi = async () => {
//             const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=46465e335778a633dcc3b8725b7638a9`;
//             const res = await fetch(url);
//             // console.log(res);
//             const resJson = await res.json();
//             // console.log(resJson);
//             setCity(resJson) // bss main wala part hi utha liya 

//         }
//         fetchApi();
//     }, [search])

//     const input = (event) => {
//         const res = event.target.value;
//         setSearch(event.target.value);
//         console.log(res);

//     }

//     return (

//         <div className='box'>
//             <div className="inputData">
//                 <input
//                     type="search"
//                     value={search}
//                     className='inputField'
//                     onChange={input}  />
//             </div>

//             {
//                 !city ?
//                     <>
//                         <p className='empty'>No Data found</p>
//                         <div className="wave -one"></div>
//                         <div className="wave -two"></div>
//                         <div className="wave -three"></div>
//                     </>

//                     :
//                     <div>
//                         <div className='info'>
//                             <h2 className="location">
//                                 <i className="fa-solid fa-street-view fa-beat fa-xl"></i>{search}
//                             </h2>
//                             <h1 className="temp">
//                                 {city.main.temp}<sup>°</sup> C
//                             </h1>
//                             <h3 className="tempmin_max">Min Temp : {city.main.temp_min}<sup>°</sup> C <br />
//                             Max Temp : {city.main.temp_max}<sup>°</sup> C</h3>
//                         </div>

//                         <div className="wave -one"></div>
//                         <div className="wave -two"></div>
//                         <div className="wave -three"></div>
//                     </div>

//             }
//         </div>
//     )
// }

// export default Weather

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// api key = 46465e335778a633dcc3b8725b7638a9

//example ki data kaise aayega 
// https://api.openweathermap.org/data/2.5/weather?q=pune&appid=46465e335778a633dcc3b8725b7638a9


import React, { useEffect, useState } from 'react';
import './Weather.css';

const Weather = () => {
    const [city, setCity] = useState('');
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchApi = async () => {
            try {
                // Check if search is truthy before making the API request

                if (search) {
                    // const encodedSearch = encodeURIComponent(search);
                    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=46465e335778a633dcc3b8725b7638a9`;

                    const res = await fetch(url);
                    const resJson = await res.json();
    
                    if (resJson.cod === '404') {
                        setCity(null);
                    } else {
                        setCity(resJson);
                    }
                } 
                else {
                    // If search is empty, set city to null
                    // console.log('nhi mila ')
                    setCity(null);
                }
            } catch (error) {
                console.error('Error fetching weather data:', error);
                // console.log('not found')
                setCity(null);
            }
        };
    
        fetchApi();
    }, [search]);

   
    
    
    const input = (event) => {
        const value = event.target.value;
        setSearch(value);
    };

    return (
        <div className='box'>
            <div className="inputData">
                <input
                    type="search"
                    value={search}
                    className='inputField'
                    onChange={input}
                />
            </div>

            <div className='when'>
            <div>
                {new Date().toLocaleString("en-US", { day: '2-digit' })} &nbsp;
                {new Date().toLocaleString("en-US", { month: "long" })} &nbsp;
                {new Date().getFullYear()}
            </div>

            <div>
            {new Date().toLocaleTimeString()}           
            </div>
            </div>

            {!city ? (
                <>
                    <p className='empty'>No Data found</p>
                    <div className="wave -one"></div>
                    <div className="wave -two"></div>
                    <div className="wave -three"></div>
                </>
            ) : (
                <>
                <div>
                    <div className='info'>
                        <h2 className="location">
                            <i className="fa-solid fa-street-view fa-lg"></i>
                            {search}
                            <span>
                            ,{city.sys && city.sys.country !== undefined
                                ? `${city.sys.country}`
                                : 'N/A'} 
                        </span>
                        </h2>
                        <div className='description'>
                            {city.weather && city.weather[0].description !== undefined
                                ? `${city.weather[0].description}`
                                : 'N/A'}
                        </div>
                        <h1 className="temp">
                            {city.main && city.main.temp !== undefined
                                ? `${city.main.temp}° C`
                                : 'N/A'}
                        </h1>
                        <h3 className="tempmin_max">
                            Min Temp :{' '}
                            {city.main && city.main.temp_min !== undefined
                                ? `${city.main.temp_min}° C`
                                : 'N/A'}{' '}
                            <br />
                            Max Temp :{' '}
                            {city.main && city.main.temp_max !== undefined
                                ? `${city.main.temp_max}° C`
                                : 'N/A'}
                            <br />
                            Pressure:{' '}
                            {city.main && city.main.pressure !== undefined
                                ? `${city.main.pressure} Pa`
                                : 'N/A'}
                            <br />
                            Humidity:{' '}
                            {city.main && city.main.humidity !== undefined
                                ? `${city.main.humidity} g/kg`
                                : 'N/A'}
                            <br />
                            {/* {city.weather && city.weather[0].description !== undefined
                                ? `${city.weather[0].description}`
                                : 'N/A'} */}
                        </h3>
                    </div>

                    <div className="wave -one"></div>
                    <div className="wave -two"></div>
                    <div className="wave -three"></div>
                </div>
                </>
            )}
        </div>
    );
};

export default Weather;
