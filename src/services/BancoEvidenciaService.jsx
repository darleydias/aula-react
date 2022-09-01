import axios from "axios"

const BASE_URL = 'https://catenampmg.herokuapp.com/evidencias'

class EvienciaService {

    getEvidencias() {
        return axios.get(BASE_URL);
    }

}

export default new EvienciaService;