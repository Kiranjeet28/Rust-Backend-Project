import axios from 'axios';

export default async function getData() {

    try {
        const token = sessionStorage.getItem("token")
        const response = await axios.get('http://127.0.0.1:8000/api/v1/user',{
            headers :{
                "Authorization" : `tokenRust ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return error;

    }
}
