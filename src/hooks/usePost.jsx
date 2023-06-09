// I Made this hook at the same time as I mate the useFetch hook, but since I can't use it due to JSON-server not supporting POST requests it is not used in the project atm.
// If I have lots of time left: Check if its worth creating a usePut hook instead. but I don't think its worth it for this project.

import { useState } from 'react';
import React from 'react';

// Custom WebHook for posting to the database via an api
function usePost(url) {
	const [isLoading, setIsLoading] = useState(false); // Create a variable for the loading state
	const [error, setError] = useState(null); // Create a variable for the error state

	const post = async (data) => {
		setIsLoading(true); // Set the loading state to true( loading) before the fetch request is made
		try {
			const response = await fetch(url, {
				method: 'POST',
				body: JSON.stringify(data),
				headers: {
					'Content-Type': 'application/json', // Set the content type to json for the request body to be parsed as json on the server side
				},
			});
			const json = await response.json();
			setIsLoading(false); // Set the loading state to false (not loading) after the fetch request is made and the response is received and parsed
			return json;
		} catch (error) {
			setIsLoading(false); // -||-
			setError(error); // Set the error state to the error received from the fetch request if any
		}
	};
	return { post, isLoading, error }; // return the post function, loading state and error state as an object
}

export default usePost;
