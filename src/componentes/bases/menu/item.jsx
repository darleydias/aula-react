import React from "react";
import { createHashHistory } from 'history'
export const history = createHashHistory()

class Item extends React.Component{
    constructor(props){
        super(props)
        this.setContent = this.setContent.bind(this);
    }
    componentDidMount(){

    }
    setContent(link){
        history.push(link)
    }
    render(){
        return(
            <div>
            <li className={this.props.classe} onClick={()=>this.setContent(this.props.link)}>
                <a className="sidebar-link"> 
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