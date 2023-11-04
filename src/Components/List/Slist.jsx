import React from 'react'

const Slist = ({spells}) => {

  return (
    <>
    <h1 className='spellsHeading'>Spells</h1>
    {spells.slice(0, 10).map((spell)=>(

      <div className="container" key={spell.id}>
        <p className='grid-item'>{spell.name}</p>
    </div>
    

      ))}
    </>
  )
}

export default Slist