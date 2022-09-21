import React from "react";
import {Outlet} from "react-router-dom"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import "../App.css"

class AppLayout extends React.Component{
    render(){
        
        return(
            <div className="d-flex" id="main-wrapper">
                <Sidebar/>
                <div id="content-wrapper">
                    <Header/>
                    <Outlet/>
                </div>
            </div>
        )
    }
}
export default AppLayout