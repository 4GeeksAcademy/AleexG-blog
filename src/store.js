export const initialStore=()=>{
  return{
    characters: [],
    planets: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case "getCharacters":
      return {
        ...store, characters: action.payload
      }
    case "getPlanets":
      return {
        ...store, planets: action.payload
      }
    case "handleFavorites":
      let newFavorites = []
      if(store.favorites.includes(action.paylaod)){
        newFavorites = store.favorites.filter(favorite => favorite != action.payload)
      }else {
        newFavorites = [...store.favorites, action.payload]
      }
      return{
        ...store,
        favorites: newFavorites
      }
    default:
      throw Error('Unknown action.');
  }    
}
