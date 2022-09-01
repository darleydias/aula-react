import React from "react"
import BancoEvidenciaController from "../../controllers/BancoEvidenciaController"
import './BancoEvidenciaComponent.css'


class ListBancoEvidenciaComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = { evidencias: [] }

        this.detail = this.detail.bind(this);

    }

    async componentDidMount() {

        var data = await BancoEvidenciaController.getEvidencias()
        if (data === 0) {
            alert('Ocorreu um erro ao listar Ecidencias!')
        }
        else {

            this.setState({ evidencias: data })
        }
    }

    addEvidencias() {
        this.props.history.push('/add-evidencia/0100')
    }

    detail() {
        this.props.history.push('/view-evidencia/0100');
    }

    render() {

        return (
            <div>
                <h2 className="text-center">Lista de evidencias</h2>
                <button className="btn btn-primary" onClick={() => this.addEvidencias()}>Nova Eviencia</button>
                <hr />
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Código</th>
                                <th>Nome</th>
                                <th>Descrição</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.evidencias.map((evidencia, index) =>
                                    <tr key={index}>
                                        <td>{evidencia.descricao}</td>
                                        <td>{evidencia.dtColeta}</td>
                                        <td>{evidencia.status}</td>
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
export default ListBancoEvidenciaComponent