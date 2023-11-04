import React from 'react'

const Spells = ({spells}) => {

  return (
    <div className='container'>
    {spells.map((spell)=>(

      <div className="popover" key={spell.id}>
        <label className="popover-trigger my-2]" tabIndex="0">{spell.name}</label>
        <div className="popover-content" tabIndex="0">
          <div className="popover-arrow"></div>
          <div className="p-4 text-sm">{spell.description}</div>
        </div>
    </div>

      ))}
    </div>
  )
}

export default Spells