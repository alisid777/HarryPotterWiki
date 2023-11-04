import React from 'react'

//Using useParams hook
import { useParams } from "react-router-dom";

// In the url http://localhost:3000/character/:id . Here :id is a parameter useParams is used to get that parameter
// Just use something like this "const id = useParams();" You will have your ID in id variable.



const SingleCharacter = ({chars}) => {
  const { id } = useParams();
  console.log(id);
  console.log(chars)
  const character = chars.find((char) => char.id === id);

  if(!character){
    return(
      <div>
        <p>No character Found Sorry</p>
      </div>
    )
  }

  
  return (
  <div className="character-card bg-OffWhite">
    <img src={character.image} alt={character.name} className="character-image" />
    <div className="character-details">

      <h2>{character.name}</h2>

      <p className="details-label">Alternate Names: <span>{character.alternate_names ? character.alternate_names.join(', ') : "none"}</span></p>

      <p className="details-label">Species: <span>{character.species}</span> </p>

      <p className="details-label">Gender: <span>{character.gender}</span></p>

      <p className="details-label">House: <span>{character.house}</span></p>

      <p className="details-label">Date of Birth: <span>{character.dateOfBirth}</span></p>

      <p className="details-label">Wizard: <span>{character.wizard ? 'Yes' : 'No'}</span></p>

      <p className="details-label">Ancestry: <span>{character.ancestry}</span></p>

      <p className="details-label">Eye Colour: <span>{character.eyeColour}</span></p>

      <p className="details-label">Hair Colour: <span>{character.hairColour}</span></p>

      <p className="details-label">Wand: <span>{character.wand.wood} with a core of {character.wand.core} (Length: {character.wand.length} inches)</span></p>

      <p className="details-label">Patronus: <span>{character.patronus}</span></p>

      <p className="details-label">Hogwarts Student: <span>{character.hogwartsStudent ? 'Yes' : 'No'}</span></p>

      <p className="details-label">Hogwarts Staff: <span>{character.hogwartsStaff ? 'Yes' : 'No'}</span></p>

      <p className="details-label">Actor: <span>{character.actor}</span></p>

      <p className="details-label">Alive: <span>{character.alive ? 'Yes' : 'No'}</span></p>
    </div>
  </div>
  )
}

export default SingleCharacter