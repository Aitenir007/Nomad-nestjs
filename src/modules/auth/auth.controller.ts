import {Controller,Post,Body, Get} from '@nestjs/common';
  import { AuthService } from './auth.service';
  
  @Controller('auth')
  export class AuthController {
    constructor(private readonly usersService: AuthService) {}

    @Post('signup')
    async singUp(@Body() userDate){
        return await this.usersService.signup(userDate);
    }

  }