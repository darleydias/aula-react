import React from "react";
import OperacaoController from "../../controllers/OperacaoController";

class ListOpeacaoComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {operacoes:[]}
        this.detail = this.detail.bind(this);
        this.delete = this.delete.bind(this);
    }
    async componentDidMount(){
        var data = await OperacaoController.getOperacoes()

        //console.log(data)

        if (data === 0) {
            //alert('Ocorreu um erro ao listar OPERACOES!')
            this.props.history.push('/')
        }
        else {

            this.setState({ operacoes: data })
        }
    }
    addOperacao() {
        this.props.history.push('/add-operacao/00')
    }

    detail(codigo) {
        this.props.history.push(`/view-operacao/${codigo}`);
    }

    delete(codigo) {
        this.props.history.push(`/delete-operacao/${codigo}`)
    }
    update(codigo) {
        this.props.history.push(`/add-operacao/${codigo}`)
    }

    render(){
        return(
            
            <div>
            
            <h2 className="text-center">Lista de Operacoes</h2>
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
                                        <button className="btn btn-info btn-sm" onClick={() => this.detail(operacao.codigo)}>Detalhes</button>
                                        <button style={{ marginLeft: "10px" }} 
                                            className="btn btn-danger btn-sm"
                                            onClick={() => this.delete(operacao.codigo)}>
                                            Excluir
                                        </button>
                                        <button style={{ marginLeft: "10px" }} 
                                            className="btn btn-warning btn-sm"
                                            onClick={() => this.update(operacao.codigo)}>
                                            Alterar</button>
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