import { useFormik } from "formik";
import {useDispatch} from "react-redux";
import axios from "axios"
import * as Yup from "yup";
import { createRegistration } from "../src/signup/action/SignupAction";

export const register= () => {
    const dispatch = useDispatch();
    const RegistrationSchema = Yup.object().shape({
        yob: Yup.number().required("year is Required"),
        name: Yup.string().required("Name is Required"),
        mobile_number:Yup.string().required("Mobile_number is required")
    });
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
             
            name: '',
            yob: '',
            mobile_number:'',

        },
        
        validationSchema: RegistrationSchema,
        onSubmit: ({ name, yob,mobile_number }) => {
        //alert('Product name- ' + name + 'Price- ' + price);
        dispatch(createRegistration(name,yob,mobile_number))      
       // let data =  axios.post('http://localhost:5000/products/add', { name: 'xyz', price: 450 })
        

        }
             
         

        
    });
    return (
        <div className="h-50 w-50 ml-5 mt-5">
            <form onSubmit={formik.handleSubmit} className="d-block"  >
                <h3>Register</h3>
                <div className="form-group ">
                    <label> Name</label>
                    <input id="name"
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        className="form-control" placeholder="Enter Name" />
                </div>
                {formik.errors.name && formik.touched.name ? (
                    <div>{formik.errors.name}</div>
                ) : null}

                <div className="form-group ">
                    <label>Year of birth</label>
                    <input id="yob"
                        name="yob"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.yob} className="form-control" placeholder="Enter year of birth" />
                </div>
                {formik.errors.yob && formik.touched.yob ? (
                    <div>{formik.errors.yob}</div>
                ) : null}
                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
            </form>
        </div>
    );
}  

