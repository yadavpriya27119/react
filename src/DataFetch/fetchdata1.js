import { useEffect, useState } from "react";
export const FetchAPI1 = () => {
const [products, setProducts] = useState(null)
    
    const fetchData = async () => {
        // fetch("http://localhost:5000/products/")
        //     .then((response) => response.json())
        //     .then((data) => console.log(data));
        const response = await fetch('http://localhost:5000/products/');

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }

        let data = await response.json();
        setProducts(JSON.stringify(data));
        //console.log('PRODUCTS IS', products)
        //return products;

    }
    useEffect(() => {
        fetchData();
    }, []);
    if(products === null)  return <h1> No Products</h1>;
    return (
        <div>
            <h1>Data Fetching</h1>
            {products}
        </div>
    )
}