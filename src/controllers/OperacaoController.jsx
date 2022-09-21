import OperacaoService from "../services/OperacaoService"

class OperacaoController {
    async getOperacoes() {
    try{
        console.log("é nois")
        var response = await OperacaoService.getOperacoes();
  
        if (response.status === 200) {

            return response.data
        }
        else {
            return 0;
        }
    }catch(error){
        console.log(error)
        return 0;
    } 
}
    async createOperacao(operacao) {
        var response = await OperacaoService.createOperacao(operacao);

        if (response.status === 201) {
            return 'Operação cadastrada com sucesso!!'
        }
        else {
            return 'Erro ' + response.data;
        }
    }
    async buscar(codigo) {   
        let operacao = await(await OperacaoService.buscar(codigo)).data[0];
        return operacao;
    }
    async excluir(codigo) {
        
        let response = await OperacaoService.excluir(codigo);
        alert(response.status)

        if (response.status === 201) {
            return 'Operação excluida com sucesso!!'
        }
        else {
            return 'Erro ' + response.data;
        }
    }
}
export default new OperacaoController()