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

createEvidencia(evidencia){
    return axios.post(BASE_URL.evidencia)
}



}

export default new BancoEvidenciaController