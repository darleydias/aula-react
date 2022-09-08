import React from "react";
import Menu from "./Menu";

class Content extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <div class="page-content d-flex align-items-stretch"> 
                    <Menu/>
                </div>
            </div>
        )
    }
}
export default Content