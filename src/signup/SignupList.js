import React, { useEffect } from "react";

import { useSelector, useDispatch } from 'react-redux'
import {SignupListDetails} from '../signup/SignupListDetails'
import { fetchregistration } from '../action/ProductAction'


import { FadeLoader } from "react-spinners";


function SignupList() {

  const dispatch = useDispatch();
  const loading = useSelector(state => state.SignupReducer.loading)
  const registrations = useSelector(state => state.SignupReducer.registrations);//array in reducer

  
  let NoregistrationStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',

  }

  useEffect(() => {

    dispatch(fetchregistration())

  }, [])
  //Here Empty Array Renders Component only once so exhibits componentDidMount

  if (loading) return <FadeLoader color={"red"} height={100} margin={150} />
  //<FadeLoader color={"red"} radius={500} style={NoproductStyle} />
  console.log("user is " + JSON.stringify(registrations));
  if (registrations.length === 0 && !loading) return <div> No registrations or Cant fetch from server </div>
  return (

    <div>
      {
        registrations.length > 0 && <div class="container-fluid">
          <div class="row clearfix">

            {registrations.map(r => <SignupListDetails registration={r} />)}

          </div>
        </div>
      }
    </div>

  )
}

export default SignupList