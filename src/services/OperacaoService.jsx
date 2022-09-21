
import api from './ApiInterceptor'
// O interceptor api vi verificar se o usuaio está logado
// Verificando pelo metodo getLoggedUser() do AuthService se tem token

// const BASE_RESOURCE = 'operacoes'
const BASE_RESOURCE = 'operacoes'
class OperacaoService {
    
    getOperacoes() {
        const result= api.get(BASE_RESOURCE);
        // console.log(result)
        return result
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
export default new OperacaoService();     