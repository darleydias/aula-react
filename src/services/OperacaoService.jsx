
import api from './ApiInterceptor'

const BASE_RESOURCE = 'operacoes'
class OperacaoService {
    
    getOperacoes() {
        return api.get(BASE_RESOURCE);
    }

    createOperacao(operacao) {
        return api.post(BASE_RESOURCE, operacao)
    }

    buscar(codigo) {
        let URL = BASE_RESOURCE + '/' + codigo
        return api.get(URL);
    }

    excluir(codigo) {
        let URL = BASE_RESOURCE + '/' + codigo
        return api.delete(URL)
    }
}
export default new OperacaoService;     