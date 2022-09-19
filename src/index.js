import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ListOperacaoComponents from "./components/operacao/ListOperacaoComponent"
import Dashboard from "./components/Dashboard"
import DetailOperacaoComponent from './components/operacao/DetailOperacaoComponent';
import CreateOperacaoComponent from './components/operacao/CreateOperacaoComponent';
import Login from './components/Login';
import Forgot from './components/Forgot';
import NotFound from './components/NotFound';
import AppLayout from './containers/AppLayout';
import DeleteOperacaoComponent from "./components/operacao/DeleteOperacaoComponent"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <BrowserRouter>
      <Routes>
                        <Route path="/login" exact element={<Login/>}/>     
                        <Route path="/login/:codigo" exact element={<Login/>}/>     
                        <Route path="/forgot" exact element={<Forgot/>}/>
                        
                        <Route path="/" element={<AppLayout/>}>
                          
                            <Route path="operacoes" element={<ListOperacaoComponents/>}/> 
       
                            <Route path="dashboard" element={<Dashboard/>}/>
                            <Route path="view-operacao/:codigo" element={<DetailOperacaoComponent/>}/>
                            <Route path="add-operacao/:codigo" element = {<CreateOperacaoComponent/>}/>
                            {/* <Route path='add-operacao/:codigo' element={<CreateOperacaoFormHook/>}></Route> */}
                            <Route path="delete-operacao/:codigo" element={<DeleteOperacaoComponent/>}/>
                        </Route>
                        <Route path='*' element={<NotFound/>}/>
                    </Routes>
      </BrowserRouter>
    </React.StrictMode>
  
);
reportWebVitals();
