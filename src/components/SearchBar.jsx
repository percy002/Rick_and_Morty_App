import styled from "styled-components";
import { useState } from "react";

const SearchDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export default function SearchBar(props) {
   // console.log(props.onSearch);
   let [id,setId] = useState('')

   const handleChange = (event) => {
      // console.log(event.target.value);
      setId(event.target.value)
   }
   return (
      <SearchDiv>
         <input type='search' onChange={handleChange} />
         <button onClick={
            ()=>props.onSearch(id)
            }>Agregar</button>
      </SearchDiv>
   );
}
