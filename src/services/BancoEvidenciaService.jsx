import axios from "axios"

const BASE_URL = 'https://catenampmg.herokuapp.com/evidencias'

class EvienciaService {

    getEvidencias() {

        let config={
            headers:{
                auth:'opa'
            }
        }

        return axios.get(BASE_URL,config);
    }

    createEvidencia(evidencia) {
        return axios.post(BASE_URL, evidencia)
    }

}

export default new EvienciaService;