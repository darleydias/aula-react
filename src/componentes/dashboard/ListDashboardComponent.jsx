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
                <div className="container-fluid">
                     <h2>Dashboard</h2>
                </div>
        )
    }
}
export default Dashboard