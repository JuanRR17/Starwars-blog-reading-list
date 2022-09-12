import React, { useReducer} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import Item from "./views/item";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

import favouritesContext, {reducer, initialState} from "./store/favourites-context";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
    const [state, dispatch] = useReducer(reducer, initialState)

	const actions = {
		add:(payload)=>dispatch({type:"add", payload}), 
		delete: (payload)=>dispatch({type:"delete", payload})
	}

	return (
		<div className="w-75 m-auto">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
				<favouritesContext.Provider value={{ favourites:state.favourites, actions}}>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/:item/:item_id">
							<Item />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
				</favouritesContext.Provider>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
