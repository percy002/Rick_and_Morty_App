import { ADD_FAV,REMOVE_FAV } from "./actions-type";

const initialState={myFavorites:[]}

const reducer = (state=initialState,actions) => {
        switch (actions.type) {
            case ADD_FAV:
                return {
                    ...state,
                    myFavorites: [...state.myFavorites,actions.payload]
                }
                break;

            case REMOVE_FAV:
                let filterFavorite = state.myFavorites.filter((char) => char.id !== Number(actions.payload))
                return {
                    ...state,
                    myFavorites: filterFavorite
                }
                break;
        
            default:
                return {...state}//retoranar el estado previo
                break;
        }
    }

export default reducer