import React from "react";
import Cartao from "./content/Cartao";
import Dashboard from "../dashboard/ListDashboardComponent";
import CicloVida from "../cicloVida/ListCicloVidaComponent";
import Mba from "../mba/ListMbaComponent";
import BancoEvidencia from "../bancoEvidencias/ListBancoEvidenciaComponent";
import Movimentacao from "../movimentacoes/ListMovimentacaoComponent";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import CreateEvienciaComponent from "../bancoEvidencias/CreateBancoEvidenciaComponent";


class Content extends React.Component{
    render(){
        let itens = [
            {"valor":"3454","descri":"Operações em andamento","icone":"fas fa-tasks fa-fw"},
            {"valor":"767","descri":"Funcionários envolvidos","icone":"fas fa-tasks"},
            {"valor":"99","descri":"Evidencias apreendidas","icone":"fas fa-tasks"},
        ]
        return(
            <div className="page-content w-100"> 
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
                <CreateEvienciaComponent/>
                <header className="bg-white">

                </header>
                <div className="row">
                           
                    <div className="container-fluid list-unstyled py-0 ">
                        { itens.map( (item,index) =>

                            <Cartao key={index} descri={item.descri} valor={item.valor} icone={item.icone}/>

                        )}
                    
                    </div>
                
                </div>
            </div>
        )
    }
}
export default Content