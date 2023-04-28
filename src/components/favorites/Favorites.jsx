import { connect } from "react-redux";
import Card from "../card/Card";

const Favorites = (props) => {
  let { myFavorites } = props;
  console.log("favorites", myFavorites);
  return (
    <>
    <h2>My favorites</h2>
        {
            myFavorites.map(char =>{
                return(
                    <div key={char.id}>

                        <h2>{char.id}</h2>
                        <Card id={char.id}
                        name={char.name}
                        status={char.status}
                        species={char.species}
                        gender={char.gender}
                        origin={char.origin.name || 'unknow'}
                        image={char.image}/>
                    </div>
                )
            })
        }
      
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};
export default connect(mapStateToProps, null)(Favorites);
