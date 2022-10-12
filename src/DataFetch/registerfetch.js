
import { useEffect } from "react";
import axios from "axios"
export const RegisterAPI = () => {

    const fetchData = async () => {
        let { data } = await axios.get('http://localhost:5000/Register/get')
        console.log("DATA IS", data);
    }
    const postData = async () => {
        let data = await axios.post('http://localhost:5000/Register/add', { name: 'tina', yob:2000,mobile_number:1234567  })
        console.log("DATA IS", data);
    }
    useEffect(() => {
        fetchData();
        postData();
    }, []);
    return (
        <div>
            <h1>Data Fetching</h1>

        </div>
    )
}


export default RegisterAPI;
