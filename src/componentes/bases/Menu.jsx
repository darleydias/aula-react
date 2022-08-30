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
        console.log("Buscar da API")
        axios.get("https://catenampmg.herokuapp.com/itemMenu")
            .then(result =>{
                this.setState({itens:result.data})
                console.log(result.data)
            }
            ).catch((err) => {
                console.error("ops! ocorreu um erro" + err);})
    }
    render(){
    // let itens = [
    //     {"nome":"Inicio","classe":"sidebar-item active  pt-0","href":"localhost:3000","img":"fa fa-home"},
    //     {"nome":"M.B.A","classe":"sidebar-item ","href":"localhost:3000","img":"fas fa-balance-scale"},
    //     {"nome":"Ciclo de vida","classe":"sidebar-item ","href":"localhost:3000","img":"fas fa-qrcode"},
    //     {"nome":"Banco de evidencias","classe":"sidebar-item","href":"localhost:3000","img":"fas fa-database"},
    //     {"nome":"Movimentacoes","classe":"sidebar-item ","href":"localhost:3000","img":"fas fa-exchange-alt"}]
        return(
            <div>
                <nav className="side-navbar z-index-40 bg-dark">
                <Cabecalho nome="Joao" img="img/avatar-1.jpg" funcao="Progamador" setor="GAECO"/>
                {/* <!-- Itens de menu--> */}
                <ul className="list-unstyled py-0">
                            { this.state.itens  .map( (item) =>
                             <Item nome={item.nome} classe={item.classe} hfef={item.href} img={item.img}/>
                             ) }
                </ul>
                </nav>
            </div>    
        )
    }
}
export default Menu