import React from "react";

class BancoEvidencia extends React.Component{
    constructor(props){
        super(props)
        this.state = {itens:[]}
    }
    componentDidMount(){
        
    }
    render(){
        return(
                <div class="container-fluid">
                     Banco de Evidências
                </div>
        )
    }
}
export default BancoEvidencia