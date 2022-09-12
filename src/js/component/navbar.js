import React from "react";
import { Link } from "react-router-dom";
import Favourites from "./Favourites.jsx";
import {logo} from "../store/images"

export const Navbar = () => {
	const style = {
		height: "110px"
	}
	return (
		<nav className="navbar navbar-light bg-light mb-3 px-4">
			<Link to="/">
				<img src={logo} alt="..." style={style}/>
			</Link>
	
			<Favourites/>
		</nav>
	);
};
