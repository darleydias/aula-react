import React from "react";
import Menu from "./componentes/bases/Menu"
import Footer from "./componentes/bases/Footer"
import Content from "./componentes/bases/Content"
import Header from "./componentes/bases/Header"
import axios from "axios"

// import Routes from "./routes";
// import { Link } from 'react-router-dom';

class App extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
    }
    render(){

        return(
            <div>
                <h1>To aqui</h1>
            <Header/>
            <div className="page-content d-flex align-items-stretch"> 
                <Menu/>
                <Content/>
            </div>
            <Footer/>
           
            </div> 
        )
    }
}
export default App