import axios from "axios"
import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"
const Detail = () => {
  const {id} = useParams();
  const [character,setCharacter] = useState({})

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);

 console.log('character',character,id);
 console.log('character name',character?.name);
 console.log(character?.origin);
  return (
    <>
    {
      character?.origin && (
        <>
          <p>{character.name}</p>
          <p>{character.status}</p>
          <p>{character.origin.name}</p>
          <p>{character.gender}</p>
        </>
        
      )

    }
    
      
    </>
    )
}
export default Detail