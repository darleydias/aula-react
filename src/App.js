import React from "react";
import Login from "./components/Login";
import DetailOperacaoComponent from './components/operacao/DetailOperacaoComponent';
import Menu from "./components/bases/Menu"
import CreateOperacaoComponent from './components/operacao/CreateOperacaoComponent';
import DeleteOperacaoComponent from './components/operacao/DeleteOperacaoComponent';
import ListOperacaoComponents from "./components/operacao/ListOperacaoComponent";
import CreateOperacaoFormHook from "./components/operacao/CreateOperacaoFormHook";
import Header from "./components/bases/Header";

import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Content from "./components/bases/Content";

class App extends React.Component{
    render(){
        return(
            <div>
                <Header/>
             {/* <Content> */}
             <Router>
                <div className="container">
                    <Switch>
                    
                        <Route path="/" exact component={Login}></Route>                    
                        {/* <Route path="/" exact component={ListOperacaoComponents}></Route>                     */}
                        <Route path="/list-operacao" exact component={ListOperacaoComponents}></Route>
                        <Route path='/view-operacao/:codigo' component={DetailOperacaoComponent}></Route>
                        {/* <Route path='/add-operacao/:codigo' component={CreateOperacaoComponent}></Route> */}
                        <Route path='/add-operacao/:codigo' component={CreateOperacaoFormHook}></Route>
                        <Route path='/delete-operacao/:codigo' component={DeleteOperacaoComponent}></Route>
                    </Switch>   
                </div>
              </Router>
                
             {/* </Content> */}
                {/* <Footer/> */}
            </div> 
        )
    }
}
export default App