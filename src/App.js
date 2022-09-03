import React from "react";
import Menu from "./components/bases/Menu"
import Footer from "./components/bases/Footer"
import Content from "./components/bases/Content"
import Header from "./components/bases/Header"
import CicloVida from "./components/cicloVida/ListCicloVidaComponent"
import Mba from "./components/mba/ListMbaComponent";
import Movimentacao from "./components/movimentacoes/ListMovimentacaoComponent"
import BancoEvidencia from "./components/bancoEvidencias/ListBancoEvidenciaComponent"
import ListOperacaoComponents from "./components/operacao/ListOperacaoComponent";
import Login from "./components/Login"

import {BrowserRouter as Router,Route,Switch} from "react-router-dom"

class App extends React.Component{
    render(){
        return(
            <div>
                 <Header/>
                 {/* <div    className="page-content d-flex align-items-stretch">  */}
                    {/* <Menu/> */}
                    {/* <Content/> */}
                {/* </div> */}
                <Router>
                <div className="container">
                    <Switch>
                        {/* <Route path="/" exact component={Login}></Route> */}
                        <Route path="/" component={ListOperacaoComponents}></Route>
                        <Route path="/ciclovida" component={CicloVida}></Route>
                        <Route path="/mba" component={Mba}></Route>
                        <Route path="/movimentacao" component={Movimentacao}></Route>
                        <Route path="/bancoevidencia" component={BancoEvidencia}></Route>
                    </Switch>   
                </div>
              </Router>
             {/*    
                <div className="page-content d-flex align-items-stretch"> 
                    <Menu/>
                    <Content/>
                </div>
                <Footer/> */}
            </div> 
        )
    }
}
export default App