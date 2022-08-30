import React from "react";

class Movimentacao extends React.Component{
    constructor(props){
        super(props)
        this.state = {itens:[]}
    }
    componentDidMount(){
        
    }
    render(){
        return(
                <div class="container-fluid">
                     Movimentacao da Evidência
                </div>
        )
    }
}
export default Movimentacao