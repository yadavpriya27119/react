import React from "react";
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
//import swal from 'sweetalert';
//import { deleteProduct } from '../action/ProductAction'

// import './table.css'

const API_KEY = process.env.REACT_APP_API_KEY;
export const ProductListDetails = ({ product }) => {

  console.log("PRODUCT LIST DETAIL IS CALLED")
  //const dispatch = useDispatch()
  const history = useHistory()
  //const isLoggedIn = useSelector(state => state.UserReducer.isLoggedIn)

  /* function deleteProductConfirmation() {

    swal({
      title: "Are you sure to DELETE?",
      text: "Once deleted, you will not be able to recover",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {

          dispatch(deleteProduct(product._id))
          history.push("/products")
        }
      });
  } */

  return (
    <div>
      <button onClick={() => history.push('products/create')}>Add Product</button>
      <div class="col-lg-3 col-md-4 col-sm-12">
        <div class="card mt-2 h-100">
          <div class="card-body">

            <h5 class="card-title">Card title</h5>
            <p class="card-text">Product description is yet to be defined</p>
            {JSON.stringify(product)}
            <img src={`${API_KEY} + /assets/ + ${product.imagefilename}`} width="50" height="50" class="d-inline-block align-top" alt="" className="img-fluid" />
            <br />
            <div class="cardhover">
              <Link to={`/productDetails/${product._id}`} class="btn btn-primary" data-toggle="tooltip" data-placement="top" title="PRODUCT DETAILS"><i class="fa fa-plus fa-2x " aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Product Details"></i></Link>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
export default ProductListDetails
 /*  < div >
<div className="TableRow">
<div className="TableRowItem" > {product.name}</div>
<div className="TableRowItem">
{product.price.toFixed(2)} &#8377;
</div>

<div className="TableRowItem">
<Link to={`/products/update/${product._id}`}  >Edit Product </Link></div>
<div className="TableRowItem">
 <Link to={`/products/${product._id}`}   >View Details</Link></div>

<div className="TableRowItem">
<button className="btn btn-sm btn-danger" onClick={deleteProductConfirmation}>Delete Product</button>
</div>
</div>
<div className="TableRow">
<div className="TableRowItem">
<Link className="btn btn-success btn-sm float-left" to={`/cart/add/${product._id}`}  >Add to Cart </Link>

</div>
</div>
</div > */