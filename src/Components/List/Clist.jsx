//Create Grid or list of spells to show in Home page


import React from 'react'
import { Link } from 'react-router-dom'

const Clist = ({chars}) => {
  return (
    <div className='bg-OffWhite pt-[3rem]'>
        <h1 className='text-[3rem] text-txtColor ml-[5%] '>Characters</h1>
    <div className='box-grid'>
        
        {chars.slice(0, 8).map((character)=>(
        <Link className="box" key={character.id} to={`http://localhost:3000/character/${character.id}`}>
            <img src={character.image} alt={character.name} />
            <h3 className='text-txtColor'>{character.name}</h3>
            <p>{character.quote}</p>
          </Link>
        ))}
    </div>
    <button className='bg-deepBlue rounded-full px-3 py-2 ml-[46.5%]'> 
            <Link to='/character'> Load More </Link> </button>
    </div>
  )
}

export default Clist