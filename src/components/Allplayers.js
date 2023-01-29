import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import allplayers from "./allplayers.css"
import Detailpl from './Detailpl'

function Allplayers({item, players, setPlayers, handleItem}) {
    const navigate = useNavigate()
    const[Detpl, setDetpl] = useState({})

    
        

  return (
    <div className='allplayers-cont' onClick={() => handleItem(item.player.id)}>
        <img src={item.player.photo} />
        <p className='name'>{item.player.name} </p>
        <p className='nation'><b>Nationality:</b> {item.player.nationality} </p>
        <p className='age'><b>Age:</b> {item.player.age}</p>
        <button onClick={() => handleItem(item.player.id)} >More Info</button>
    </div>
  )
}

export default Allplayers