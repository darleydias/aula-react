import axios from "axios"

const BASE_URL = 'https://catenampmg.herokuapp.com/login'

class AuthService {

    authenticate(credential) {
        return axios.get(BASE_URL,credential);
    }
    setLoggerUser(data){

        let json_token = JSON.stringify(data)
        localStorage.setItem('user'.json_token )
    }
    getLoggedUser(){
        let token = localStorage.getItem('token_user')
        if(!toke)return null;
        try{
            let user_token = JSON.parse(token)
            return user_token
        }catch{

        }
    }


}

export default new AuthService;