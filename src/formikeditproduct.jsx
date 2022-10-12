import { useFormik } from "formik";
import {useDispatch} from "react-redux";
import axios from "axios"
import * as Yup from "yup";
import {editProduct} from './action/ProductAction'

export const EditProduct = () => {
    const dispatch = useDispatch();
    const ProductSchema = Yup.object().shape({
        price: Yup.number().required("Price is Required").min(50, "Value must b > 50").max(100000),
        name: Yup.string().required("Name is Required"),
    });
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            id:'',
            name: '',
            price: '',

        },
        
        validationSchema: ProductSchema,
        onSubmit: ({ id,name, price }) => {
        //alert('Product name- ' + name + 'Price- ' + price);
        dispatch(editProduct(id,name,price))      
       // let data =  axios.post('http://localhost:5000/products/add', { name: 'xyz', price: 450 })
        

        }
             
         

        
    });
    return (
        <div className="h-50 w-50 ml-5 mt-5">
            <form onSubmit={formik.handleSubmit} className="d-block"  >
                <h3>Add Product</h3>
                <div className="form-group ">
                    <label>Product id</label>
                    <input id="id"
                        name="id"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.id}
                        className="form-control" placeholder="Enter Product id" />
                </div>
                {formik.errors.id && formik.touched.id ? (
                    <div>{formik.errors.id}</div>
                ) : null}

                <div className="form-group ">
                    <label>Product Name</label>
                    <input id="name"
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        className="form-control" placeholder="Enter Product Name" />
                </div>
                {formik.errors.name && formik.touched.name ? (
                    <div>{formik.errors.name}</div>
                ) : null}

                <div className="form-group ">
                    <label>Product Price</label>
                    <input id="price"
                        name="price"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.price} className="form-control" placeholder="Enter Product Name" />
                </div>
                {formik.errors.price && formik.touched.price ? (
                    <div>{formik.errors.price}</div>
                ) : null}
                <button type="submit" className="btn btn-dark btn-lg btn-block">update_Product</button>
            </form>
        </div>
    );
}  