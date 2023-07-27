import axios from "axios";

const API_URL = 'https://my-json-server.typicode.com/angegonzalez/mock_data';

export const fetchDataProductsAPI = async (pageParam = 1) => {
    try{
        const response = await axios.get(`${API_URL}/products?_page=${pageParam}&limit=10`);
        return response.data;
    }catch(err){
        throw new Error('Error fetching data from API (products)');
    }
}