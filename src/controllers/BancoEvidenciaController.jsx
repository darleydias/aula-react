import axios from "axios";
import EvidenciaService from "../services/BancoEvidenciaService"
const BASE_URL ='https://catenampmg.herokuapp.com/evidencias'

class BancoEvidenciaController {

    async getEvidencias() {
        var response = await EvidenciaService.getEvidencias;
        console.log(response)

        if (response.status === 200) {
            return response.data;
        }
        else {
            return 0;
        }
    }

async createEvidencia(evidencia){
    var response = await EvidenciaService.createEvidencia(evidencia)
    if (response.status === 201) {
        return 'Eviencia cadastrada com sucesso!!'
    }
    else {
        return 'Erro ' + response.data;
    }
}
}

export default new BancoEvidenciaController