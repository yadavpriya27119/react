import {useEffect , useState } from "react";
import axios from "axios";
export const AxiosAPI = () => {
  const [products, setProducts] = useState(null)

  const fetchData = async () => {
    const response = await fetch('http://localhost:5000/');
    let data = await response.json();
    setProducts(JSON.stringify(data));
    
  };
       

  useEffect(() => {
    fetchData();
    // postData();
  }, []);
  return (
    <div>
      <h1>Data Fetching</h1>
      <p>{products}</p>
    </div>
  );
};
export default AxiosAPI;
