import { useEffect } from "react";
import axios from "axios"
export const AxiosAPI = () => {

    const fetchData = async () => {
        let { data } = await axios.get('http://localhost:5000/products/')
        console.log("DATA IS", data);
    }
    const postData = async () => {
        let data = await axios.post('http://localhost:5000/products/add', { name: 'xyz', price: 450 })
        console.log("DATA IS", data);
    }
    const updateData = async () => {
        let data = await axios.put('http://localhost:5000/products/update/61270d102abdc7064c47a88c', { name: 'printer', price: 1500 })
        console.log("DATA IS", data);
    }
     const deleteData = async () => {
         let data = await axios.delete('http://localhost:5000/products/delete/60f5115f2e31d433a821a162', { name: 'monitor', price: 1500 })
         console.log("DATA IS", data);
     }
    useEffect(() => {
        fetchData();
        postData();
        updateData();
        deleteData();
    }, []);
    return (
        <div>
            <h1>Data Fetching</h1>

        </div>
    )
}
export default AxiosAPI;