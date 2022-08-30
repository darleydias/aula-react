import React from "react";

class Item extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        
    }
    setCoisa(){
        alert("")
    }
    render(){
        return(
            <div>
                {console.log(this.props.link)}
            <li className={this.props.classe} onClick={this.setCoisa}>
                <a class="sidebar-link"> 
                    <div className={this.props.img}></div>
                    <svg className="svg-icon svg-icon-sm svg-icon-heavy me-xl-2"></svg>
                    {this.props.nome} 
                </a>
            </li>
            </div>

        )
    }
    }
export default Item