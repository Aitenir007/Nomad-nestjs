import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
    constructor(private readonly userService:UsersService){}
    async signup(userDate){
        return await this.userService.create(userDate);

    }
}