import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../Redux/actions";
import { useState,useEffect } from "react";

const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 30%;
`;

const style = styled.h2`
  display: flex;
`;
function Card(props) {
  // console.log(props);
  let {myFavorites} = props
  const [isFav, setIsFav] = useState(false);
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      props.removeFav(props.id);
    } else {
      setIsFav(true);
      props.addFav(props);
    }
  };

  useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);
  return (
    <CardStyle>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <button onClick={() => props.onClose(props.id)}>X</button>

      <Link to={`/detail/${props.id}`}>
        <h2>{props.name}</h2>
      </Link>

      <h2>{props.status}</h2>
      <h2>{props.species}</h2>
      <h2>{props.gender}</h2>
      <h2>{props.origin.name}</h2>
      <img src={props.image} alt="" />
    </CardStyle>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (char) => {
      dispatch(addFav(char));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
   return{
      myFavorites:state.myFavorites
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(Card);
