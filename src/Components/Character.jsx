import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const charUrl = "https://hp-api.onrender.com/api/characters";


const Character = () => {
  const [chars, setChar] = useState([]);


  //Get all character when homepage gets load

  useEffect(()=>{

    axios.get(charUrl)
    .then(function (response) {
      // handle success
      console.log(response.data);
      setChar(response.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })

  }, [])

  return (
  <div className='bg-OffWhite pt-[3rem]'>
        <h1 className='text-[3rem] text-txtColor ml-[5%] '>Characters</h1>
    <div className='box-grid'>
        
        {chars.map((character)=>(
        <Link className="box" key={character.id} to={`http://localhost:3000/character/${character.id}`} >
            <img src={character.image} alt={character.name} />
            <h3 className='text-txtColor'>{character.name}</h3>
            <p>{character.quote}</p>
          </Link>
        ))}
    </div>
  </div>
  )
}

export default Character