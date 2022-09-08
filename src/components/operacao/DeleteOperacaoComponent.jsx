import React from "react";
import OperacaoController from "../../controllers/OperacaoController";

class DeleteOperacaoComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            codigo: this.props.match.params.codigo,
            detalhe: ''

        }
        this.excluir = this.excluir.bind(this);
    }

    async componentDidMount() {
        let operacao = await OperacaoController.buscar(this.state.codigo)
        this.setState({ detalhe: operacao.nome })
    }

    goToList() {
        this.props.history.push('/list-operacao')
    }

    excluir = async (event) => {
        event.preventDefault();
        alert(await OperacaoController.excluir(this.state.codigo));
        this.goToList();

    }
    render() {

        return (
            <div>
                <div className="container">

                    <div className="row">

                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h2 className="text-center">Excluir Operacao </h2>

                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <p className="text-secondary text-center" >Deseja realmente excluir a operacao abaixo ?</p>
                                    </div>

                                    <div className="form-group">
                                        <p className="text-white bg-dark text-center" >{this.state.detalhe}</p>
                                    </div>

                                </form>

                                <button className="btn btn-success" onClick={this.excluir}>Confirmar</button>
                                <button className="btn btn-secondary" onClick={() => this.goToList()}>Cancelar</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}


export default DeleteOperacaoComponent;