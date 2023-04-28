import Card from '../card/Card';
import { useEffect } from 'react';
import styled from "styled-components";

const CardsStyle = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

`;
export default function Cards(props) {
   const {characters} = props
   // console.log('cards',props);
   useEffect(() => {
   }, [props])
   

   return (
   <CardsStyle>
      {
         (characters?.length > 0) &&
         characters.map((el) => {
            return (    
               <div key={el.id}>

                  <Card 
                  id={el.id}
                  name={el.name}
                  status={el.status}
                  species={el.species}
                  gender={el.gender}
                  origin={el.origin.name}
                  image={el.image}
                  onClose={props.onClose}
                  />
               </div>        
            )
         })
      }
            
         
   </CardsStyle>
   );
}
