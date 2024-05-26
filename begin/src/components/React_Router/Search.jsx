import React, { useState } from 'react'
import './Router.css'
import SearchResult from './SearchResult'

const Search= () => {

  const[img , setImg] = useState('')

  const input=(event)=>{
    setImg(event.target.value)
    console.log(event.target.value);
    
  }

  return (
    <>

    <center>
      <input type="text" placeholder='Search' value={img} onChange={input}/>
    </center>
    

    {img === "" ? null : <SearchResult name={img}></SearchResult>}

    </>
  )
}

export default Search