import AuthService from "../services/AuthService";

class   AuthController {

    async authenticate(credential){
        let token= await(await (AuthService.authenticate(credential))).data;
        return token;
    }

}
export default new AuthController