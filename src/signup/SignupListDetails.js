import React from "react";
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
const API_KEY = process.env.REACT_APP_API_KEY;
export const SignupListDetails = ({registration}) => {
    console.log("Signup list detail is called")
    const history=usehistory()
    return (
        <div>
          <button onClick={() => history.push('registrations/create')}>register</button>
          <div class="col-lg-3 col-md-4 col-sm-12">
            <div class="card mt-2 h-100">
              <div class="card-body">
    
                <h5 class="card-title">Card title</h5>
                <p class="card-text">registration description is yet to be defined</p>
                {JSON.stringify(registration)}
              
                <br />
                <div class="cardhover">
                <Link to={`/registrationDetails/${registration._id}`} class="btn btn-primary" data-toggle="tooltip" data-placement="top" title="REGISTRATION DETAILS"><i class="fa fa-plus fa-2x " aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Registration Details"></i></Link>

                </div>
              </div>
            </div>
    
          </div>
        </div>
      )
    }
    export default SignupListDetails
    

