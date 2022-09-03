import AuthService from "../services/AuthService";

class   AuthController {

    async authenticate(credential){
        let token= await(AuthService.authenticate(credential))
    }

}
export default new AuthController