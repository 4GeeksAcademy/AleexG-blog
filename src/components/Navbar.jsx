import { Link } from "react-router-dom";
import storeReducer from "../store";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 "><img src="https://web.dragonball-api.com/images-compress/android-icon-192x192.webp" alt="logo" height="100" width="auto" /></span>
				</Link>
				<div class="ml-auto">
					<div className="btn-group">
						<div class="btn-group">
							<button type="button" class="btn btn-danger">Danger</button>
							<button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
								<span class="visually-hidden">Toggle Dropdown</span>
							</button>
							<ul className="dropdown-menu dropdown-menu-end">
								{
									storeReducer.favorites.map(favorite => (
										<li onClick={() => dispatchEvent({ type: "handleFavorites", payload: favorite })}>{favorite}</li>
									))
								}
							</ul>
						</div>
					</div>
				</div>
		</nav>
	);
};