import React from 'react'
import detailplayer from './detailplayer.css'

function Detailpl(props) {
  console.log(props.Detplayer.length)
  return (
    <>
    <div className='Dplayer-cont'>
       <img src={props.Detplayer.player.photo} className='player-img' />
        <div className='player-info'>
          <p className='name'> Full Name: {props.Detplayer.player.firstname} {props.Detplayer.player.lastname}</p>
          <p className='name'> Height: {props.Detplayer.player.height}</p>
          <p className='name'> Nationality: <i>{props.Detplayer.player.nationality}</i></p>
          <p className='name'> Weight: {props.Detplayer.player.weight} </p>
          <p className='name'> Birth: {props.Detplayer.player.birth.date} </p>
          <p className='name'> Place: {props.Detplayer.player.birth.place} </p>
        </div> 
    </div>
    
    </>
  )
}

export default Detailpl