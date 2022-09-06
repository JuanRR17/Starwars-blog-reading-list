import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import Category from "../component/Category.jsx";

export const Home = () =>{
	const [allData, setAllData]=useState()

	const urls = [
		'https://www.swapi.tech/api/people',
		'https://www.swapi.tech/api/planets',
		'https://www.swapi.tech/api/vehicles',
	]

	function getFetch(url){
		return fetch(url)
		.then(response =>{
			if(!response.ok){
				console.log("Response from GET is not ok")
				throw Error(response.statusText);
			}
			return response.json();
		})
		.catch(error => {
			console.log('Looks like there was a problem doing GET: \n', error);
			return false
		})
	}
	useEffect(( )=>{

		const makeRequest = async (url) =>{
			const res = await getFetch(url)
			const data = await res
			return data.results
		}
		const getAllData = async () =>{
			const characters = await makeRequest(urls[0])
			const planets = await makeRequest(urls[1])
			const vehicles = await makeRequest(urls[2])
	
			const allData = [
				{
					"name":"Characters",
					"data": characters
				},
				{
					"name":"Planets",
					"data": planets
				},				
				{
					"name":"Vehicles",
					"data": vehicles
				}
			]
			setAllData(allData)
		}
		getAllData()
	},[])
	console.log("allData:",allData)

	//CREATING CATEGORIES

	return (
	<div className="mt-5">
	{
		allData 
		?  
		allData.map((category,index) =>{ 
		return <Category key={index} category={category}/>
	})
		:
		"Getting data"
	}
	</div>
	)
};

