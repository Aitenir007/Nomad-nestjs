import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty , IsString, IsEmail} from "class-validator";

export class CreateUserDto{
    @ApiProperty({
        example: 'Aiti',
        required: true,
     })
    @IsString()
    @IsNotEmpty()
    full_name:string;

    @ApiProperty({
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    password:string;

    @ApiProperty({
        example: 'jfkjkhk@gmail.com',
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;
}