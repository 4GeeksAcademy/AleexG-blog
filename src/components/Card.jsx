 import React from "react";
 import useGlobalReducer from "../hooks/useGlobalReducer";

 const Card = ({item}) => {
    const {store, dispatch} = useGlobalReducer()
    if (!item) {
        return <p>Cargando...</p>
    }
    return (
        <div className="col-2">
        <div className="card">
            <img src={item.image} className="card-img-top object-fit-contain" alt={item.name} style={{height: "20rem"}}/> 
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <button className="btn btn-primary">Ver más</button>
                    <button className="btn btn-warning" onClick={()=> dispatch({type:"handleFavorites", payload:item})}>Agregar a favorito</button>
                </div>
        </div>
        </div>
    );
};

export default Card;