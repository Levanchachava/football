import logo from './logo.svg';
import './App.css';
import { useEffect, useState} from 'react'
import Navbar from './components/Navbar';
import Main from './components/Main';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Detailpl from './components/Detailpl';



const playerData = [
  {id:1, name: "vardy", photo: "https://cdn.vox-cdn.com/thumbor/5GuzXo20s1FYOMKNsm9cdHDlf-8=/0x0:4148x2905/1200x800/filters:focal(1808x608:2470x1270)/cdn.vox-cdn.com/uploads/chorus_image/image/71644757/1441228048.0.jpg"},
  {id:2, name: "james", photo: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F06%2Fkylian-mbappe-worlds-most-valuable-football-player-00.jpg?w=960&cbr=1&q=90&fit=max"},
  {id:3, name: "vini", photo: "https://images2.minutemediacdn.com/image/fetch/c_fill,g_auto,f_auto,h_389,w_590/https%3A%2F%2Fplayingfor90.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2018%2F08%2F1413339542-850x560.jpeg"}
]

function App() {

  const navigate = useNavigate()

  const[players, setPlayers] = useState([])
  const[Detplayer, setDetplayer] = useState({})

  useEffect(() =>{
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '49b8e74506msh1abb6f2e7928472p17a280jsn5f2d21541da0',
        'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
      }
    };
    
    fetch('https://api-football-beta.p.rapidapi.com/players/topscorers?season=2019&league=39', options)
      .then(response => response.json())
      .then(data => setPlayers(data.response))
      .catch(err => console.error(err));
  }, [])

  // console.log(players)
  
  const handleItem = (itemID) => {
    players.map(item => {
      if(itemID === item.player.id) {
        setDetplayer(item)
        navigate("/detail")
        console.log(item)
      }
    })
  }
  
  console.log(players)
  

  return (
    <div className="App">
        <Navbar />
      <Routes>
        <Route path='/' element={<Main setPlayers={setPlayers} players={players} handleItem={handleItem}  />} />
        <Route path='/detail' element={<Detailpl setDetplayer={setDetplayer} Detplayer={Detplayer}  />} />
      </Routes>

    </div>
  );
}

export default App;
