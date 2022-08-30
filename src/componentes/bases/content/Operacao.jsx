import React from "react";
class Operacao extends React.Component{
// constructor(props){
//     super(props)
// }

    render(){
        return(
            <div class="card mb-3  border-1">
                <div class="card-body">
                    <div class="d-flex align-items-center">
                        <div class="icon flex-shrink-0 bg-red">
                            <i class={this.props.icone}></i></div>
                            <div class="ms-3">
                                    <strong class="text-lg d-block lh-1 mb-1">{this.props.valor}</strong>
                                    <small class="text-uppercase text-gray-500 small d-block lh-1">
                                    {this.props.descri}</small>
                            </div>
                        </div>
                    </div>
                    </div>
                )
            }
}
export default Operacao