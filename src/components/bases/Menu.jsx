import React from "react";
import Cabecalho from "./menu/Cabecalho";
import Item from "./menu/item";
import axios from "axios"

class Menu extends React.Component{
    constructor(props){
        super(props)
        this.state = {itens:[]}
    }
    componentDidMount(){

        axios.get("https://catenampmg.herokuapp.com/itemMenu")
            .then(result =>{
                this.setState({itens:result.data})
            }
            ).catch((err) => {
                console.error("ops! ocorreu um erro" + err);})
    }
    render(){
        return(
            <div>
                <nav className="side-navbar z-index-40 bg-dark">
                <Cabecalho nome="Joao" img="img/avatar-1.jpg" funcao="Progamador" setor="GAECO"/>
                {/* <!-- Itens de menu--> */}
                <ul className="list-unstyled py-0">
                            { this.state.itens.map((item,index) =>
                             <Item key={index} nome={item.nome} classe={item.classe} href={item.href} img={item.img} link={item.link}/>
                             ) }
                </ul>
                </nav>
            </div>    
        )
    }
}
export default Menu