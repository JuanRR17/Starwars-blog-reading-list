import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import Category from "../component/Category.jsx";
import { urls, makeRequest } from "../utils.js";

export const Home = () =>{
	const [allData, setAllData]=useState()
	const categories = ["Characters", "Planets", "Vehicles"]

	// useEffect(( )=>{

		// const getAllData = async () =>{
		// 	const characters = await makeRequest(urls[0])
		// 	const planets = await makeRequest(urls[1])
		// 	const vehicles = await makeRequest(urls[2])
	
			// const allData = [
			// 	{
			// 		"name":"Characters",
			// 		"data": characters.results
			// 	},
			// 	{
			// 		"name":"Planets",
			// 		"data": planets.results
			// 	},				
			// 	{
			// 		"name":"Vehicles",
			// 		"data": vehicles.results
			// 	}
			// ]
	// 		setAllData(allData)
	// 	}
	// 	getAllData()
	// },[])
	// console.log("allData:",allData)

	//CREATING CATEGORIES

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

