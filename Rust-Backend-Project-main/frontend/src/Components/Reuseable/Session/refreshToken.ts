import axios from 'axios';
// problem in the session storage other are working 
export default async function getRefresh() {
    const refresh_token = sessionStorage.getItem('refreshToken');
    const data = { 
        "refresh_token": refresh_token
    };

    try {
        const response = await axios.post('http://127.0.0.1:8000/api/v1/refresh-token', data);
        const { token: authToken, refresh_token } = response.data;
        // console.log (authToken)
        sessionStorage.setItem('refreshToken', refresh_token);
        sessionStorage.setItem('token',authToken)
        // console.log(response.data);
        return authToken;
    } catch (error) {
        console.error('Error fetching data:', error);
        return error;
    }
}
