import React from "react";

class Cabecalho extends React.Component{
    // constructor(props){
    //     super(props)
    
    // }
componentDidMount(){
}
    render(){
     
        return(
                <>
               
                <div>
                            <div className="sidebar-header d-flex align-items-center py-3 px-2 pb-0">
                                <img className="avatar shadow-0 img-fluid rounded-circle" src={this.props.img} alt="..."/>
                                <div className="ms-3 title">
                                    <h1 className="h4 mb-2">{this.props.nome}</h1>
                                    <p className="text-sm text-gray-500 fw-light mb-0 lh-1">{this.props.funcao}</p>
                                </div>        
                            </div>
                        <hr/>      
                        
                </div>
                </>
            )
    }

    }
export default Cabecalho