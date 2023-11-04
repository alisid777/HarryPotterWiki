import { Routes, Route} from 'react-router-dom';
import axios from 'axios';

//Importing components
import Character from "./Components/Character"
import SingleCharacter from "./Components/SingleCharacter"
import Houses from "./Components/Houses"
import Spells from "./Components/Spells"
import Home from "./Components/Home"


import Header from './Components/Header';
import Footer from './Components/Footer';
import NotFound from './Components/NotFound';


import { useState, useEffect } from 'react';


const charUrl = "https://hp-api.onrender.com/api/characters";
const spellUrl = "https://hp-api.onrender.com/api/spells";

function App() {
  const [chars, setChar] = useState([]);
  const [spells, setSpells] = useState([]);




  //Get all character when homepage gets load
  useEffect(()=>{

    axios.get(charUrl)
    .then(function (response) {
      // handle success
      // console.log(response.data);
      setChar(response.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })

    axios.get(spellUrl)
    .then(function (response) {
      // handle success
      console.log(response.data);
      setSpells(response.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })

  }, [])


  return (
    <div>
      <Header/>

      <Routes>

        <Route path='/' element={<Home chars = {chars} spells = {spells}/>} />

        <Route path='/character' element={<Character/>} />

        <Route path='/character/:id' element={ <SingleCharacter chars={chars}/> }/>

        <Route path='/spells' element={<Spells spells = {spells}/>} />

        <Route path='/houses' element={<Houses/>} />

        <Route path='*' element={<NotFound/>}/>

      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
