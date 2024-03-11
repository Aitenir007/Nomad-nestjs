import {Controller,Post,Body} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDocument } from '../database/models/user.model';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { LoginUserDto } from './dto';
  
  
@ApiTags('auth')

@Controller('auth')
  export class AuthController {
    authService: any;
    constructor(private readonly usersService: AuthService) {}

    @Post('signup')
    async singUp(@Body() userDate: CreateUserDto):Promise<UserDocument>{
        return await this.usersService.signup(userDate);
    }

    @Post('login')
    async login(@Body() userLogin:LoginUserDto):Promise<UserDocument>{
      return await this.authService.login(userLogin)
    }
    
  }
