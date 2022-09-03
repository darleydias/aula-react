import React from "react";
import Cartao from "./content/Cartao";


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
               
                {/* <CreateEvienciaComponent/> */}
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