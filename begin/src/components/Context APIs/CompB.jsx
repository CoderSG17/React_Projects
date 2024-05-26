import React, { useContext } from 'react'
// import ComC from './ComC'
import { FirstName, LastName } from './AppContext'

const CompB = () => {

  const fname = useContext(FirstName);
  const lname = useContext(LastName);
  return (
    <>
    <h1> My name is {fname } {lname }</h1>
    </>
  )
}

export default CompB