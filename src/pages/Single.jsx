import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Single = () => {
  const { id } = useParams(); // id que viene de la URL
  const { store } = useGlobalReducer();

  // Buscar personaje en el store
  const character = store.characters.find((char) => char.id === parseInt(id));
  const planet = store.planets.find((pla) => pla.id === parseInt(id));

  const item = character || planet;

  if (!item) return <p className="text-center my-5">Cargando detalles...</p>;

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-4">
          <img
            src={item.image}
            alt={item.name}
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-8">
          <h2 className="mb-3">{item.name}</h2>
          {item.race && <p><strong>Raza:</strong> {item.race}</p>}
          {item.ki && <p><strong>Ki:</strong> {item.ki}</p>}
          {item.maxKi && <p><strong>Máximo Ki:</strong> {item.maxKi}</p>}
          {item.description && (
            <p><strong>Descripción:</strong> {item.description}</p>
          )}
        </div>
      </div>
    </div>
  );
};
