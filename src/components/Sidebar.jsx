import React from "react";
import { Link } from "react-router-dom";
import {Navbar,NavbarBrand, NavbarToggler} from "reactstrap" 
import "../App.css"
import Templates from "../containers/routes"

class Sidebar extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
               <aside className="sidebar">
                    <div className="sidebar-title">
                        <h5>CATENA</h5>
                    </div>
                    <div className="list-group">
                        <Link to="/" className="list-group-item">Inicio</Link>
                    {Templates.map((template,index)=>(
                        <Link to={template.path} className="list-group-item" key={index}>{template.name}</Link>
                    ))}
                    </div>
               </aside>
        )
    }
}
export default Sidebar 