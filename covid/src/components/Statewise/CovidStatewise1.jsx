import React, { useState, useEffect } from 'react'
import './CovidStatewise.css'

const CovidStatewise = () => {

    const [data, setdata] = useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            // console.log(res);
            const actualdata = await res.json();
            //data object hai usme statewise ka 0th index utha liya 
            // console.log(actualdata.statewise);
            setdata(actualdata.statewise)

        } catch (error) {
            console.log(error);
            console.log("error fetching covid19india");
        }

    }

    useEffect(() => {
        getCovidData();
    }, [])

    return (
        <>
            <div className="container-fluid mt-5" >
                <div className="main-heading">
                    <h1 className='mt-6 '><span>INDIA</span> COVID-19 DASHBOARD</h1>

                </div>
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Deaths</th>
                                <th>Active</th>
                                <th>Updated</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                data.map((currElem, index) => {
                                    return (
                                        
                                            <tr key={index}>
                                                <th>{currElem.state}</th>
                                                <td>{currElem.confirmed}</td>
                                                <td>{currElem.recovered}</td>
                                                <td>{currElem.deaths}</td>
                                                <td>{currElem.active}</td>
                                                <td>{currElem.lastupdatedtime}</td>
                                            </tr>

                                    )
                                })
                            }


                        </tbody>

                    </table>
                </div>
            </div>
        </>
    )
}

export default CovidStatewise