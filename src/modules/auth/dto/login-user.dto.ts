import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty , IsString, IsEmail} from "class-validator";

export class LoginUserDto {
    @ApiProperty({
        required: true
     })
    @IsString()
    @IsNotEmpty()
    password:string;


    @ApiProperty({
        example: 'ghfyfjgu@gmail.com',
        required: true
     })
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;
}