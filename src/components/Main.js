import React from 'react'
import Allplayers from './Allplayers'
import main from "./main.css"

function Main({players ,setPlayers, handleItem}) {
  return (
    <div className='main-cont'>
        {players.map(item =>(
            <Allplayers key={item.player.id} item={item} players={players} setPlayers={setPlayers} handleItem={handleItem} />
        ))}
    </div>
  )
}

export default Main