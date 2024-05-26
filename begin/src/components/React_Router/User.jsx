import React from 'react'
import { useLocation, useParams, useNavigate } from 'react-router-dom'

const User = () => {
    const { fname, lname } = useParams();
    const location = useLocation();
    // console.log(location);
    const Navigate = useNavigate();
    console.log(location);


    return (
        <>
            <h1>This is {fname} {lname} page </h1>
            <h2>The current location is {location.pathname}</h2>

            {/* {location.pathname===`/user/shray/gupta`? (
        <button onClick={()=>alert(`You are premium user `)}>Click Me</button>):null} */}


            {location.pathname === `/user/shray/gupta` ? (
                <button onClick={() =>Navigate('/')}>Homepage</button>) : null}

            {location.pathname === `/user/shray/gupta` ? (
                <button onClick={() => Navigate(-1)}>Go back</button>) : null}
            {location.pathname === `/user/shray/gupta` ? (
                <button onClick={() => Navigate(-2)}>Go 2 pages back</button>) : null}


        </>
    )
}

export default User