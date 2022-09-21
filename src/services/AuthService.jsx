import axios from "axios"

const BASE_URL = 'https://catenampmg.herokuapp.com/login'
// const BASE_URL = 'http://localhost:3001'

class AuthService {
    authenticate(credential) {
        const endpoint = `${BASE_URL}/login` 
        return axios.post(endpoint,credential);
    }
    setLoggerUser(data){
        let json_token = JSON.stringify(data)
        localStorage.setItem('json_token',json_token )
    }
    getLoggedUser(){
        let token = localStorage.getItem('json_token')
        if(!token)return null;
        try{
            let user_token = JSON.parse(token)
            return user_token
        }catch(error){
            console.log(error)
            return null
        }
    }
    enviaEmail(email){
        console.log("email enviado")
    }
}

export default new AuthService;