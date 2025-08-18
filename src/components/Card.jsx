import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  const { store, dispatch } = useGlobalReducer();
  const navigate = useNavigate();

  if (!item) return <p>Cargando...</p>;

  const isFavorite = store.favorites.includes(item.name);

  return (
    <div className="col-2">
      <div className="card">
        <img
          src={item.image}
          alt={item.name}
          style={{ height: "20rem" }}
          className="card-img-top object-fit-contain"
        />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <div className="d-flex justify-content-between mt-3">
            <button
              className="btn btn-primary"
              onClick={() => navigate(`/character/${item.id}`)}
            >
              Ver más
            </button>
            <button
              className={`btn ${isFavorite ? "btn-danger" : "btn-warning"}`}
              onClick={() =>
                dispatch({ type: "handleFavorites", payload: item.name })
              }
            >
              {isFavorite ? (
                <i className="fa-solid fa-heart"></i>
              ) : (
                <i className="fa-regular fa-heart"></i>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
