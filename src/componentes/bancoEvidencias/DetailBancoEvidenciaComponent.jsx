import React from "react";


class DetailEvidenciaComponent extends React.Component {
    constructor(props) {
        super(props)
    }


    goToList() {
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Detalhe da Evidência</h2>
                <button className="btn btn-secondary" onClick={() => this.goToList()}>Voltar</button>
            </div>
        )
    }
}

export default DetailEvidenciaComponent
