import axios from "axios"

const BASE_URL ='https://catenampmg.herokuapp.com/operacoes'

class OperacaoService {
    getOperacoes() {''
        return axios.get(BASE_URL);
    }
    createOperacao(operacao) {
        return axios.post(BASE_URL, operacao)
    }
}
export default new OperacaoService;     