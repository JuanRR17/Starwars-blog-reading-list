import React from "react";
import "../../styles/home.css";
import Category from "../component/Category.jsx";

export const Home = () =>{
	const categories = ["Characters", "Planets", "Vehicles"]

	return (
	<div className="mt-5">
	{
		categories.map((category,index) =>{ 
		return <Category key={index} id={index} category={category}/>
		})
	}
	</div>
	)
};

