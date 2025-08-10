import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { getPersonajes, getPlanets } from "../api/dragonBallApi.js";
import Card from "../components/Card.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	const getCharactersApi = async () => {
		const data = await getPersonajes()
		dispatch({
			type: "getCharacters",
			payload: data.items
		})
	}

	const getPlanetsApi = async () => {
		const data = await getPlanets()
		dispatch({
			type: "getPlanets",
			payload: data.items
		})
	}


	useEffect(() => {
		getCharactersApi();
		getPlanetsApi()
	}, [])

	
	return (
		<div className="mt-5 container-fluid">
			<div><h2>Characters</h2></div>
			<div className="d-flex overflow-x-scroll mb-4">
				{
					store.characters.map(char=>(
						<Card key={char.id} item={char}/>
					))
				}
			</div>
			<div><h2>Planets</h2></div>
			<div className="d-flex overflow-auto mb-4">
				{
					store.planets.map(char=>(
						<Card key={char.id} item={char}/>
					))
				}
			</div>
		</div>
	);
};