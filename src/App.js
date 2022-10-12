import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AxiosAPI from "./DataFetch/axiosAPI";
//import  ClassComponent  from "./hrlloworldcls";
//import { FormUsingFC } from "./formusingfc";
//import AxiosAPI from "./DataFetch/axiosAPI";
//import JsonDataDisplay from "./jsonfunction/datadisplay";


{
  /*import UseReducerCounter from './HOOk/usereduser';
import { FetchAPI } from './DataFetch/fetchdata';
import Sayhellofn from './sayhellofn';
import AboutMe from './aboutme';
import CondRenderFunUsingclass from './condRenderfunusingclass';
import { CondRenderFunUsingFn } from './condRenderfunusingfun';
import CondRenderingCls from './condrenderingcls';
import Employee from './empcls';
import ComponentLc1 from './lifecycle/mount';
import ToggleMsgCls from './togglemessagecls';
{/*import RegisterAPI from './DataFetch/registerfetch';
 import ClassComponent from './hrlloworldcls';
import FunctionalComponent from './helloworldfn';
import GitComponent from './gitcls';
import Greet from './greetfn';
import SayHello from './sayhelloclass';





import CondRenderingfn from './CondRenderingFunusingfn';
import Employeefn from './empfn';




import ComponentLC3Msg from './Componentmsg';
import { ToggleMsgFun } from './secretmessage';
import ParentToChildAll from './ComponentComunication/parenttochild';
import ParentToChildArray from './ComponentComunication/parent tochildarray';
import ChildrenProps from './ComponentComunication/childtoparent';
import ChildToParent from './ComponentComunication/childtoparent1';
import { FormUsingClass } from './ComponentComunication/formusingcls';
import { FormUsingFC } from './ComponentComunication/formusingfc';
import CommunicationatAnyLEvel from './ComponentComunication/comunicationatanylevel';
import { BrowserRouter as Router} from 'react-router-dom'
import ItemsListArray from './ComponentComunication/HOC';
import ObjectinUsestate from './ComponentComunication/HOC1';
import UseEfectcount from './HOOk/useeffect';
import { AddProduct } from './formikyup';
import { FetchAPI } from './DataFetch/fetchdata';

import AxiosAPI from './DataFetch/axiosAPIpost';

import {FetchAPI1} from './DataFetch/fetchdata1';
//import ProductRoutes from './routes/ProductRoute';
import Store from './emp/store/empstore';
import ProductRoutes from'../src/routes/ProductRoute'
import {Provider } from 'react-redux'
//import { Router } from 'react-router-dom';*/
}
//import ProducRoutes from './routes/ProductRoute';

{
  /* const products=[
  {
    'name':'laptop',
    'price':40000

  },
  {
    'name':'cpu',
    'price':10000
  }
]*/
}
const employees = [
  {
    name: "amit",
    desg: "trainee",
    dept: "node",

    salary: 15000,
  },
  {
    name: "ami",
    desg: "developer",
    dept: "React",
    salary: 60000,
  },
];
function App() {
  return (
    <div>
      {/* <CondRenderingFn/>
    <Router>
      <Provider store = { Store}>
    
     <ClassComponent/>
      <FunctionalComponent/>
      <GitComponent name='abc'/>
      <Greet />
      <SayHello/> 
      
      
      <CondRenderFunUsingFn/>
      
      
      
      <Employeefn id='1' name='Mohan' desg='admin'/>
      
      < ComponentLc1 />
      
      
      <ComponentLC3Msg/>
      <ToggleMsgFun/>
      <ParentToChildAll/>
      <ParentToChildArray/>
     <Employee details={employees}/>
     <ChildrenProps/>
     <ChildToParent/>
     <FormUsingClass/>
     
     <CommunicationatAnyLEvel/>
     <Employee details={employees}/>
     
     <Greet/>
     <ItemsListArray/>
     
     <UseEfectcount/>
     <AddProduct/>
     <CommunicationatAnyLEvel/>
     <Product details={products}/>
     <FormUsingFC/>
     <ObjectinUsestate/>
     <FetchAPI/>
     <AxiosAPI/>
     <AxiosAPI/>
     
     <FetchAPI1/>
     <ProducRoutes/>

     <EmployeeRoutes/>

     </Provider>
   </Router>
    <RegisterAPI/> 
    <Sayhellofn name="priya" />
    <AboutMe test="hellow"/>
    <CondRenderFunUsingclass/>
    <CondRenderFunUsingFn/>
    <CondRenderingCls/> 
    <Employee id='1' name='Mohan' desg='admin' salary='15000'/>
    < ComponentLc1 /> 
    <ToggleMsgCls/>
    <ComponentLC2/>
   
    <FetchAPI/>
    <UseReducerCounter/>
      <JsonDataDisplay />*/}
      {/* <FormUsingFC /> 
      <AxiosAPI />*/}
     <AxiosAPI /> 
    </div>
  );
}

export default App;
