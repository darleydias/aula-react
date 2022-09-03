import OperacaoService from "../services/OperacaoService";


class OperacaoController {

    async getOperacoes() {
        var response = await OperacaoService.getOperacoes();

        if (response.status === 200) {
            return response.data;
        }
        else {
            return 0;
        }
    }

    async createOperacao(operacao) {

        var response = await OperacaoService.createOperacao(operacao);

        if (response.status === 201) {
            return 'item cadastrado com sucesso!!'
        }
        else {
            return 'Erro ' + response.data;
        }
    }

}

export default new OperacaoController