import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import ProductList from '../product/ProductList'
import {AddProduct}  from '../formikyup'
import {EditProduct} from '../formikeditproduct'
import {DeleteProduct} from '../formikdeleteproduct'
export default function ProducRoutes() {
    return (
        <Switch>

            <Route exact path="/products" component={ProductList}/>
            <Route exact path="/products/add" component={AddProduct}/>
            <Route exact path="/products/update/:id" component={EditProduct}/>
            <Route exact path="/products/delete/:id" component={DeleteProduct}/>
			    </Switch>
    )
}