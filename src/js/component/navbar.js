import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars</span>
			</Link>
	
			<div className="ml-auto">
					<div className="dropdown">
						{/* <a className="btn btn-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites <span className="badge bg-secondary">4</span>
						</a> */}
						<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
							Dropdown button <span className="badge bg-secondary">4</span>
						</button>
						<ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
							<li><Link to="/" className="dropdown-item" href="#"/>Action</li>
							<li><Link to="/" className="dropdown-item" href="#"/>Another action</li>
							<li><Link to="/" className="dropdown-item" href="#"/>Something else here</li>
						</ul>
					</div>
			</div>
		</nav>
	);
};
