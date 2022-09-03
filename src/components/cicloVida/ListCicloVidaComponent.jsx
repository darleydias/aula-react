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
                <div className="container-fluid">
                     Ciclo de vida da Evidência
                </div>
        )
    }
}
export default CicloVida