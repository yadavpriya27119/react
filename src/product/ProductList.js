import React, { useEffect } from "react";

import { useSelector, useDispatch } from 'react-redux'
import {ProductListDetails} from '../product/ProductListDetail'
import { fetchProducts } from '../action/ProductAction'

// import { Link } from 'react-router-dom'
import { FadeLoader } from "react-spinners";
// import './table.css'

function ProductList() {

  const dispatch = useDispatch();
  const loading = useSelector(state => state.ProductReducer.loading)
  const products = useSelector(state => state.ProductReducer.products);

  /*  const onSuccess = data => {

    dispatch(fetchProductsSuccess(data))
  }
  const onFailure = err => {
    addToast('Server Fetch Error', { appearance: 'error', autoDismiss: true, autoDismissTimeout: 5000 })
    dispatch(fetchProductsFailure())
  }  */

  let NoproductStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',

  }

  useEffect(() => {

    dispatch(fetchProducts())

  }, [])
  //Here Empty Array Renders Component only once so exhibits componentDidMount

  if (loading) return <FadeLoader color={"red"} height={100} margin={150} />
  //<FadeLoader color={"red"} radius={500} style={NoproductStyle} />
  console.log("Products is " + JSON.stringify(products));
  if (products.length === 0 && !loading) return <div> No Products or Cant fetch from server </div>
  return (

    <div>
      {
        products.length > 0 && <div class="container-fluid">
          <div class="row clearfix">

            {products.map(p => <ProductListDetails product={p} />)}

          </div>
        </div>
      }
    </div>

  )
}

export default ProductList