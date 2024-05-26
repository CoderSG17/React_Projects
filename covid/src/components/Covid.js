import React, { useEffect,useState } from 'react'
import './Covid.css';

const Covid = () => {

    const [data ,setdata] = useState([]);



    //fetch and res.json() promise data return krte hai i.e either accepted or rejected
    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            console.log(res);
            const data = await res.json();
            //data object hai usme statewise ka 0th index utha liya 
            console.log(data.statewise[0]);
            setdata(data.statewise[0])  ;

        } catch (error) {
            console.log(error);
            console.log("error fetching covid19india");
        }

    }

    //whatever we write in this it will call that
    //[] is used so that it is called only once 
    useEffect(() => {
          getCovidData();
    }, [])

    return (
        <>
        <section>
            <h1 className='blink'> 🔴Live</h1>
            <h2>Covid19 Tracker</h2>

            <ul>
                <li className='card'>
                    <div className='card_main'></div>
                    <div className='card_inner '></div>
                    <p className="card_name"><span>OUR </span>COUNTRY</p>
                    <p className="card_total card_small">INDIA</p>

                </li>
                <li className='card'>
                    <div className='card_main'></div>
                    <div className='card_inner '></div>
                    <p className="card_name"><span>Total  </span>Recovered</p>
                    <p className="card_total card_small">{data.recovered}</p>

                </li>
                <li className='card'>
                    <div className='card_main'></div>
                    <div className='card_inner '></div>
                    <p className="card_name"><span>Total </span>Confirmed</p>
                    <p className="card_total card_small">{data.confirmed}</p>

                </li>
                <li className='card'>
                    <div className='card_main'></div>
                    <div className='card_inner '></div>
                    <p className="card_name"><span>Total </span>Deaths</p>   
                    <p className="card_total card_small">{data.deaths}</p>

                </li>
                <li className='card'>
                    <div className='card_main'></div>
                    <div className='card_inner '></div>
                    <p className="card_name"><span>OUR </span>COUNTRY</p>
                    <p className="card_total card_small">{data.active}</p>

                </li>
                <li className='card'>
                    <div className='card_main'></div>
                    <div className='card_inner '></div>
                    <p className="card_name"><span>OUR </span>COUNTRY</p>
                    <p className="card_total card_small">{data.deltaconfirmed}</p>

                </li>
            </ul>
            </section>
        </>
    )
}

export default Covid