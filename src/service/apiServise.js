<<<<<<< HEAD
import axios from "axios";

const BASE_URL = "https://youtube-v3-alternative.p.rapidapi.com";

const options = {
	method: "GET",
	url: "https://youtube-v31.p.rapidapi.com/search",
	params: {
		
		maxResults: "50",
	
	},
	headers: {
		"X-RapidAPI-Key": "2b09ee226cmsh3efc88d0141ae38p15130ejsnf1c0f85b04fc",
		"X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
	},
};

export const ApiService = {
	async fatching(url) {
		const responce = await axios.get(`${BASE_URL}/${url}`, options);
		return responce.data;
	},
};
=======
import axios from "axios";

const BASE_URL = "https://youtube-v3-alternative.p.rapidapi.com";

const options = {
	method: "GET",
	url: "https://youtube-v31.p.rapidapi.com/search",
	params: {
		
		maxResults: "50",
	
	},
	headers: {
		"X-RapidAPI-Key": "2b09ee226cmsh3efc88d0141ae38p15130ejsnf1c0f85b04fc",
		"X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
	},
};

export const ApiService = {
	async fatching(url) {
		const responce = await axios.get(`${BASE_URL}/${url}`, options);
		return responce.data;
	},
};
>>>>>>> 18f7273c035e072893483a945f5e46923e2d023b
