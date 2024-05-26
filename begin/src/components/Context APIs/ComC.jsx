import React from 'react'
import {FirstName, LastName} from './AppContext'

const CompC = () => {

  return (
    <>
    {/* This will lead to hell triangle if there are too many consumers  */} 
    {/* Rather than doing this we could simply do things wriiten in CompB  */}
    <FirstName.Consumer>
      {(fname)=>
      {
        return(
          <LastName.Consumer>{(lname)=>{
            return <h1>My name is {fname} {lname}</h1>
          }}</LastName.Consumer>
        )
      }}
    </FirstName.Consumer>
    </>
  ) 
}

export default CompC;