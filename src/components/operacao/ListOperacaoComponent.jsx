import React from "react";
import  OperacaoController from "../../controllers/OperacaoControllers" 

class ListOpeacaoComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {operacoes:[]}
        this.detail = this.detail.bind(this);
    }
    async componentDidMount(){
        var data = await OperacaoController.getOperacoes()
        if (data === 0) {
            alert('Ocorreu um erro ao listar OPERACOES!')
        }
        else {

            this.setState({ operacoes: data })
        }
    }
    addOperacao() {
        this.props.history.push('/add-operacao/0100')
    }

    detail() {
        this.props.history.push('/view-operacao/0100');
    }

    delete(codigo) {
        this.props.history.push(`/delete-operacao/${codigo}`)
    }

    render(){
        return(
            <div>
            <h2 className="text-center">Lista de tens de estatistica</h2>
            <button className="btn btn-primary" onClick={() => this.addOperacao()}>Novo Item</button>
            <hr />
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Operação</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.operacoes.map((operacao, index) =>
                                <tr key={index}>
                                    <td>{operacao.codigo}</td>
                                    <td>{operacao.nome}</td>
                                    <td>
                                        <button className="btn btn-info btn-sm" onClick={() => this.detail()}>Detalhes</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
        )
    }
}
export default ListOpeacaoComponent