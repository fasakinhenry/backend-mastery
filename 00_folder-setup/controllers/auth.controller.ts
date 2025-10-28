import { Request, Response } from "express";
import Joi from "joi";

import AuthService from "./../services/auth.service";

class AuthController {
  // Controller methods will go here

  public static async signup (req: Request, res: Response) {
    const signupSchema = Joi.object({
       email: Joi.string().email().required(),
       password: Joi.string().min(6).max(20).required(),
       fullname: Joi.string().min(3).required(),
       username: Joi.string().alphanum().min(3).max(30).required() 
    });

    const { error, value } = signupSchema.validate(req.body);

    if(error){
        return res.status(400).json({ message: error.details[0].message });
    }

    // check if the email or username already exists

    // create the user from the auth service

    // respond with success message

    


  }
}

export default AuthController;
