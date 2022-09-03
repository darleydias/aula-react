import React from "react";
class Movimentacao extends React.Component{
// constructor(props){
//     super(props)
// }

    render(){
        return(
            <div className="card mb-3  border-1">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <div className="icon flex-shrink-0 bg-red">
                            <i className={this.props.icone}></i></div>
                            <div className="ms-3">
                                    <strong className="text-lg d-block lh-1 mb-1">{this.props.valor}</strong>
                                    <small className="text-uppercase text-gray-500 small d-block lh-1">
                                    {this.props.descri}</small>
                            </div>
                        </div>
                    </div>
                    </div>
                )
            }
}
export default Movimentacao