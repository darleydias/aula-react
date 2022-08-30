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
        this.state = {itens:[]}
    }
    componentDidMount(){
        console.log("Buscar da API")
        axios.get("https://git.heroku.com/catenampmg.git")
            .then(result =>{
                this.setState({itens:result.data})
                console.log(result.data)
            }
            ).catch((err) => {
                console.error("ops! ocorreu um erro" + err);})
    }
    render(){

        return(
            
            <div>
            
            <Header/>
            <div className="page-content d-flex align-items-stretch"> 
                {(res,req)=>res.send(this.state)}
                <Menu/>
                <Content/>
            </div>
            <Footer/>
           
            </div> 
        )
    }
}
export default App