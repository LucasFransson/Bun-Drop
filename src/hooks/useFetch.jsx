// import { useState, useEffect } from 'react';
// import React from 'react';

// /**
//  * Custom hook for fetching and deserializing JSON from an API.
//  *
//  * @param {string} url - The URL of the API endpoint.
//  * @param {any} initialState - The initial state of the fetched data.
//  * @returns {any} - The fetched and deserialized data.
//  */

// // Custom WebHook for fetching & deserializing JSON from an api
// function useFetch(url, initialState) {
// 	const [data, setData] = useState(initialState); // Create a variable for the fetched data
// 	useEffect(() => {
// 		fetch(url)
// 			.then((response) =>
// 				response
// 					.json()
// 					.then((jsonData) => setData(jsonData))
// 					.catch((error) => console.error(error))
// 			)
// 			.catch((error) => console.error(error));
// 	}, [url]);
// 	return data; // return the data (variable containing the fetched data)
// }

// export default useFetch;

import { useState, useEffect } from 'react';

// Custom WebHook for fetching & deserializing JSON from an API
const useFetch = (url, initialState) => {
	const [data, setData] = useState(initialState);
	useEffect(() => {
		fetch(url)
			.then((response) =>
				response
					.json()
					.then((jsonData) => {
						setData(jsonData);
					})
					.catch((error) => console.error(error))
			)
			.catch((error) => console.error(error));
	}, [url]);
	return data;
};

export default useFetch;
