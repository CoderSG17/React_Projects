import React , {useEffect, useState} from 'react'
import axios from 'axios'

const PokemonApi = () => {

    const [num, setNum] = useState('_');

    const [name, setName] = useState()
    const [moves, setMove] = useState()

    useEffect(() => {
       async function  getData(){
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
        console.log(res);
        //for name 
        console.log(res.data.name);
        setName(res.data.name)
        setMove(res.data.moves.length)//moves were in the form of the array that's why we used length to get the total number of moves 

        
       }
       getData();

    }
        )

  return (
    <>
        <h1>You choose <span  style={{color:'red'}}>{num}</span> value</h1>
        <h1>My name is <span style={{color:'red'}}> {name}</span></h1>
        <h1>I have <span style={{color:'red'}}>{moves} </span> moves </h1>

        <select value={num} onChange={(event)=>{
            setNum(event.target.value)
        }}>
            <option value="1" defaultValue={0}>1</option>
            <option value="20">20</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="23">23</option>
            <option value="4">4</option>
            <option value="25">25</option>
        </select>
    </>
  )
}

export default PokemonApi