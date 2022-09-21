import AuthService from "../services/AuthService";

class   AuthController {

    async authenticate(credential){
        const token= await(await (AuthService.authenticate(credential))).data
        return token
    }
    async enviaEmail(email){
        let msg = AuthService.enviaEmail(email)
        return msg;
    }

}
export default new AuthController