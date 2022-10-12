export const FETCH_REGISTRATIONS = "FETCH_REGISTRATIONS";
export const FETCH_REGISTRATIONS_FAILURE = "FETCH_REGISTRATIONS_FAILURE";
export const FETCH_REGISTRATIONS_SUCCESS = "FETCH_REGISTRATIONS_SUCCESS";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const CREATE_PRODUCT_FAILURE = "CREATE_PRODUCT_FAILURE";
export const CREATE_PRODUCT_SUCCESS = "CREATE_PRODUCT_SUCCESS";
export const fetchProducts = () => {
    return {
        type: FETCH_PRODUCTS,

    }
}

export const fetchProductsSuccess = data => ({ type: FETCH_PRODUCTS_SUCCESS, data });

export const fetchProductsFailure = () => ({ type: FETCH_PRODUCTS_FAILURE });
export const createProduct = ( name, price )=>{
    console.log(" IN Action",{name,price})
    return {
        type: CREATE_PRODUCT,
        name,
        price
        

    };
}


export const createProductSuccess = data => ({ type: CREATE_PRODUCT_SUCCESS, data });

export const createProductFailure = () => ({ type: CREATE_PRODUCT_FAILURE });
