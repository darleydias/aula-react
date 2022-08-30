import React from "react";
import Cartao from "./content/Cartao";
import Dashboard from "../Dashboard";
import CicloVida from "../CicloVida";
import Mba from "../Mba";
import BancoEvidencia from "../BancoEvidencia";
import Movimentacao from "../Movimentacao";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"


class Content extends React.Component{
    render(){
        let itens = [
            {"valor":"3454","descri":"Operações em andamento","icone":"fas fa-tasks fa-fw"},
            {"valor":"767","descri":"Funcionários envolvidos","icone":"fas fa-tasks"},
            {"valor":"99","descri":"Evidencias apreendidas","icone":"fas fa-tasks"},
        ]
        return(
            <div className="page-content"> 
                <header className="bg-white">
                        <h2 className="mb-0 p-1">Titulo</h2>
                </header>
                <div className="row">
                           
                    {/* <div className="container-fluid list-unstyled py-0 ">
                        { itens.map( (item) =>

                            <Cartao descri={item.descri} valor={item.valor} icone={item.icone}/>

                        )}
                    
                    </div> */}
                
                <Router>
                
                    <div className="container">
                        <Switch>
                            <Route path="/" exact component={Dashboard}></Route>
                            <Route path="/ciclovida" component={CicloVida}></Route>
                            <Route path="/mba" component={Mba}></Route>
                            <Route path="/movimentacao" component={Movimentacao}></Route>
                            <Route path="/bancoevidencia" component={BancoEvidencia}></Route>
                        </Switch>
                    </div>
           
                </Router>
                </div>
            </div>
        )
    }
}
export default Content