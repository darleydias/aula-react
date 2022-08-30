import React from "react";

class CicloVida extends React.Component{
    constructor(props){
        super(props)
        this.state = {itens:[]}
    }
    componentDidMount(){
        
    }
    render(){
        return(
                <div class="container-fluid">
                     Ciclo de vida da Evidência
                </div>
        )
    }
}
export default CicloVida