import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import App from "./App";
import Mba from "./componentes/bases/content/Mba";
import Operacao from "./componentes/bases/content/Operacao";
import Banco from "./componentes/bases/content/Banco";
import Movimentacao from "./componentes/bases/content/Movimentacao";
import Ciclovida from "./componentes/bases/content/CicloVida";

const Routes = () => {
   return(
       <BrowserRouter>
          <Route component = {App} path="/" exact/>
           <Route component = { Mba }  path="/mba"/>
           <Route component = { Operacao }  path="/operacoes" />
           <Route component = { Banco }  path="/banco" />
           <Route component = { Movimentacao }  path="/movimentacao" />
           <Route component = { Ciclovida }  path="/cilcovida" />
       </BrowserRouter>
   )
}

export default Routes;