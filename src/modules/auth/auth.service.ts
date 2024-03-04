import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDocument } from '../database/models/user.model';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService:UsersService,
        private jwtServise: JwtService
        ){}
    async signup(userDate:CreateUserDto):Promise<UserDocument>{
        return await this.userService.create(userDate);

    }


    async validateUser(login: string, password: string): Promise<any> {
        try {
          const user = await this.userService.findOne({ login, password });
          if (!user) {
            return null;
          }
          return user;
        } catch (error) {
          return error.data;
        }
      }

    async login(userLogin){
        try{
            const user = await this.userService.findOneUserEmail(userLogin.login)
            if(user){
                if(user.password === userLogin.password){
                    const {email} = userLogin;
                    const payload = {email};
                    return{ 
                        access_token: this.jwtServise.sign(payload),
                    };
                } 
            }
            return "Неверные данные для входа "
        }catch(error){
            return error.message;
        }
    }
}