
import React from "react";
import {Switch,Route} from "react-router-dom"
import Root from "./componentes/bases/root";
export default ()=>{
    return(
        <Switch>
            <Route exact path="/">
                <Root/>
            </Route>
            <Route exact path="/MBA">
                <MBA/>
            </Route>
        </Switch>
    )
}