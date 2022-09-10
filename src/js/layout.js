import React, {useState} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import Item from "./views/item";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

import favoritesContext from "./favorites-context";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	const [favorites, setFavorites] = useState([])
	const deleteFromFavorites = (id) =>{
		const newFavorites = favorites.filter((fav)=>{
			return fav.uid !== id
		})
		// debugger
		setFavorites(newFavorites)
	}

	const addToFavorites = (item)=>{
		setFavorites([...favorites,item])
	}
	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
				<favoritesContext.Provider value={{ favorites: favorites, add:addToFavorites, delete: deleteFromFavorites }}>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/:item/:item_id">
							<Item />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					</favoritesContext.Provider>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
