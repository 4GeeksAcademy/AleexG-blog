import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer();

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0">
						<img
							src="https://web.dragonball-api.com/images-compress/android-icon-192x192.webp"
							alt="logo"
							height="100"
							width="auto"
						/>
					</span>
				</Link>

				<div className="ml-auto">
					<div className="btn-group">
						<button type="button" className="btn btn-danger">
							Favoritos ({store.favorites.length})
						</button>
						<button
							type="button"
							className="btn btn-danger dropdown-toggle dropdown-toggle-split"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							<span className="visually-hidden">Toggle Dropdown</span>
						</button>
						<ul className="dropdown-menu dropdown-menu-end">
							{store.favorites.length > 0 ? (
								store.favorites.map((favorite, index) => (
									<li
										key={index}
										className="dropdown-item"
										onClick={() =>
											dispatch({ type: "handleFavorites", payload: favorite })
										}
									>
										{favorite}
									</li>
								))
							) : (
								<li className="dropdown-item text-muted">No hay favoritos</li>
							)}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
