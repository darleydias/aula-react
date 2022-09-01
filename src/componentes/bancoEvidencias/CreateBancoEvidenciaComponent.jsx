import React from "react";
import BancoEvidenciaController from "../../controllers/BancoEvidenciaController";

class CreateEvienciaComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {codigo:"",nome:""}
        this.save=this.save.bind(this)
    }


    goToList(){
        this.props.history.push('/')
    }
    changeCodigo = (event)=>{
        this.setState({codigo:event.target.value})
    }
    changeNome = (event)=>{
        this.setState({nome:event.target.value})
    }
    save = (e)=>{
        e.preventDefault()
        let evidencia = {
            codigo:this.state.codigo,
            nome:this.state.nome
            }
        BancoEvidenciaController.createEvidencia(evidencia).then(x=>{
            alert(x.data)
        })
    }

    render() {
        return (

                 <div className="container w-100">
                    <div className="row  w-100">
                        <div className="card col-md-6 offset-md-3">
                            <h2 className="text-center">Nova Evidencia</h2>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                        <label>Codigo:</label>
                                            <input type="text"
                                                name="codigo" 
                                                className="form-control"
                                                onChange={this.changeCodigo}
                                                placeholder="digite"
                                                value={this.state.codigo}>
                                            </input>
                                        </div> 
                                        <div className="form-group">
                                        <label>Nome:</label>
                                            <input type="text"
                                                name="nome"
                                                className="form-control"
                                                onChange={this.changeNome}
                                                placeholder="nome"
                                                value={this.state.nome}>                                                                                            
                                            </input>
                                        </div>

                                    </form>
                                </div>
                                <button className="btn btn-success" onClick={this.save}>Salvar</button>
                                <button className="btn btn-secondary" onClick={() => this.goToList()}>Salvar</button>
                        </div>
                    </div>
                </div>

        )
    }
}


export default CreateEvienciaComponent;