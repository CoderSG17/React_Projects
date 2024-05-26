import React from 'react'
import './Router.css'
const SearchResult = (props) => {

    const img =`https://source.unsplash.com/400x400/?${props.name}`
  return (
    <>
        <center>
            <img src={img} alt="error" />
        </center>   
    </>
  )
}

export default SearchResult