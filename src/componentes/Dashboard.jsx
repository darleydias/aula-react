import React from "react";

class Dashboard extends React.Component{
    constructor(props){
        super(props)
        this.state = {itens:[]}
    }
    componentDidMount(){
        
    }
    render(){
        return(
                <div class="container-fluid">
                     Dashboard
                </div>
        )
    }
}
export default Dashboard