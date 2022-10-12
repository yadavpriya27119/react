const ProductDetails = props => {
    console.log(props);
    const { name, price } = props.detail;
    return (
        <li key={props.key}>
            <div>
                <p>Name : {name}</p>
                <p>price : {price}</p>

            </div>
        </li>
    );
};


export const Product = props => {
    const details = props.details;
    console.log(details);
    return (
        <div>

            <ul>
                {details.map((detail, index) => (
                    <ProductDetails detail={detail} key={index} />
                ))}
            </ul>
        </div>
    );
};