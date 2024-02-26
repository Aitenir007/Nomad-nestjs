import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[JwtModule.register({
    secret:'nomad',
    signOptions:{expiresIn:'20h'},
  })],
  controllers: [AuthController],
  providers: [AuthService, UsersService],
})
export class AuthModule {}
