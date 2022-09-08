
import React from "react";
import OperacaoController from "../../controllers/OperacaoController";


class DetailOperacaoComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            codigo: this.props.match.params.codigo,
            detalhe:{descri:'',nome:''}
        }

    }
    async componentDidMount(){

        let objDetalhe = await OperacaoController.buscar(this.state.codigo);
        this.setState({detalhe:{descri:objDetalhe.descri,nome:objDetalhe.nome}})
    }

    goToList() {

        this.props.history.push('/list-operacao')
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Detalhe da Operaçao</h2>
                Detalhe: {JSON.stringify(this.state.detalhe)}
                <button className="btn btn-secondary" onClick={() => this.goToList()}>Voltar</button>
            </div>
        )
    }
}

export default DetailOperacaoComponent