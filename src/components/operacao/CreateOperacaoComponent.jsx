
import React from "react";
import OperacaoController from "../../controllers/OperacaoController";

class CreateOperacaoComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = { codigo: '', nome: '', descricao: '' }

        this.save = this.save.bind(this);
    }
    async componentDidMount(){
      
        if(this.props.match.params.codigo!=="00"){
            let codigo = this.props.match.params.codigo
            let operacao = await OperacaoController.buscar(codigo)
            this.setState({codigo:codigo})
            this.setState({nome:operacao.nome})
            this.setState({descricao:operacao.descricao})
        }
    }

    goToList() {
        this.props.history.push('/list-operacao')
    }

    changeCodigo = (event) => {
        this.setState({ codigo: event.target.value })
    }

    changeNome = (event) => {
        this.setState({ nome: event.target.value })
    }

    changeDescricao = (event) => {
        this.setState({ descricao: event.target.value })
    }

    save = async (e) => {
        e.preventDefault();

        let operacao = {
            codigo: this.state.codigo,
            nome: this.state.nome,
            descricao: this.state.descricao
        }

        var resultado = await OperacaoController.createOperacao(operacao);

        alert(resultado)

        this.goToList();
    }



    render() {
        return (
            <div>

                <div className="container">

                    <div className="row">

                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h2 className="text-center">Nova Operação</h2>

                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Código:</label>
                                        <input
                                            placeholder="Código"
                                            name="codigo"
                                            className="form-control"
                                            onChange={this.changeCodigo}
                                            value={this.state.codigo}>

                                        </input>

                                    </div>

                                    <div className="form-group">
                                        <label>Nome:</label>
                                        <input
                                            placeholder="Nome"
                                            name="nome"
                                            className="form-control"
                                            value={this.state.nome}
                                            onChange={this.changeNome}
                                        >
                                        </input>

                                    </div>

                                    <div className="form-group">
                                        <label>Descrição:</label>
                                        <input
                                            placeholder="Descrição"
                                            name="descricao"
                                            className="form-control"
                                            value={this.state.descricao}
                                            onChange={this.changeDescricao}
                                        >
                                        </input>

                                    </div>
                                    <button className="btn btn-success" onClick={this.save}>Salvar</button>
                                    <button className="btn btn-secondary" onClick={() => this.goToList()}>voltar</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>




            </div>
        )
    }
}


export default CreateOperacaoComponent;