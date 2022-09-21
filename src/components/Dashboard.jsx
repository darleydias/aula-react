import React from "react";
import { Button } from "reactstrap"
import {Link} from "react-router-dom"


class Dashboard extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h1>Dashboard</h1>
                <p><Link to="/">Voltar</Link></p>
            </div>
        )
    }
}
export default Dashboard