export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";

export const FETCH_PRODUCT = "FETCH_PRODUCT";
export const FETCH_PRODUCT_FAILURE = "FETCH_PRODUCT_FAILURE";
export const FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS";

export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const CREATE_PRODUCT_FAILURE = "CREATE_PRODUCT_FAILURE";
export const CREATE_PRODUCT_SUCCESS = "CREATE_PRODUCT_SUCCESS";

export const EDIT_PRODUCT = "EDIT_PRODUCT";
export const EDIT_PRODUCT_FAILURE = "EDIT_PRODUCT_FAILURE";
export const EDIT_PRODUCT_SUCCESS = "EDIT_PRODUCT_SUCCESS";

export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const DELETE_PRODUCT_FAILURE = "DELETE_PRODUCT_FAILURE";
export const DELETE_PRODUCT_SUCCESS = "DELETE_PRODUCT_SUCCESS";

export const fetchProducts = () => {
    return {
        type: FETCH_PRODUCTS,

    }
}

export const fetchProductsSuccess = data => ({ type: FETCH_PRODUCTS_SUCCESS, data });

export const fetchProductsFailure = () => ({ type: FETCH_PRODUCTS_FAILURE });

export const fetchProduct = (id, onSuccess, onFailure) => {
    console.log("IN FETCH PRODUCT ACTION");
    return {
        type: FETCH_PRODUCT,
        id,
        onSuccess,
        onFailure
    }
}

export const fetchProductSuccess = data => ({ type: FETCH_PRODUCT_SUCCESS, data });

export const fetchProductFailure = () => ({ type: FETCH_PRODUCT_FAILURE });

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

export const editProduct = (id, name, price) => {
    return {
        type: EDIT_PRODUCT,
        payload: {
            id,
            name,
            price
        }
    }
}

export const editProductSuccess = data => ({ type: EDIT_PRODUCT_SUCCESS, data });

export const editProductFailure = () => ({ type: EDIT_PRODUCT_FAILURE });

export const deleteProduct = id => {

    return {
        type: DELETE_PRODUCT,
        id: id
    }
}

export const deleteProductSuccess = data => ({ type: DELETE_PRODUCT_SUCCESS, data });

export const deleteProductFailure = () => ({ type: DELETE_PRODUCT_FAILURE });