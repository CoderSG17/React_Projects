import React, { createContext } from 'react';
import CompA from './CompA';

const FirstName = createContext('');
const LastName = createContext('');

const AppContext = () => {

  return (
    <>
    <FirstName.Provider  value={'Shray'}>
      <LastName.Provider value={'Gupta'}>
    <CompA></CompA>
    </LastName.Provider>
    </FirstName.Provider >
    </>
  )
}

export {FirstName ,LastName}  
export default AppContext