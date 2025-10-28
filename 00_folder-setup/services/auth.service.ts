import bcrypt from 'bcryptjs';
import UserModel from '../models/user.model';


export interface IUser {

}
class AuthService {

    static async createUser(userData: IUser) {
        //get the user details



        //hash the password


        //create the user
    }
}

export default AuthService;
