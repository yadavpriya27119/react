import { useEffect } from "react";
export const FetchAPI = () => {

    let products;
    const fetchData = async () => {
        // fetch("http://localhost:5000/products/")
        //     .then((response) => response.json())
        //     .then((data) => console.log(data));
        try {
            const response = await fetch('http://localhost:5000/');
           
            if (!response.ok) {
                const message = `An error has occured: ${response.status}`;
                console.log("MESSAGE IS", message)
                throw new Error(message);
            }

            products = await response.json();
            console.log('PRODUCTS IS', products)
        }
        catch (err) {
            console.log("ERROR is", err);
        }
        //return products;

    }
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div>
            <h1>Data Fetching</h1>
             <h2> {products} </h2>
        </div>
    )
}
//{*/import { useEffect } from "react";
//import axios from "axios";
//export const AxiosAPI = () => {
  //const fetchData = async () => {
    //let { data } = await axios.get("http://localhost:5000/products/");
   // console.log("DATA IS", data);
 // };

  //useEffect(() => {
  //  fetchData();
    // postData();
//  }, []);
  //return (
    //<div>
      //<h1>Data Fetching</h1>
      //<p>{data}</p>
    //</div>
  //);
//};
//export default AxiosAPI;
