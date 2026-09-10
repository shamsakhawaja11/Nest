import {IsEmail, IsInt, IsNotEmpty, IsOptional, IsPositive, IsString, MinLength, Validate} from 'class-validator';
import { MatchPassword } from 'src/common/custom-validators/matchpassword';

export class CreateUserDto{
    @IsEmail()
    @IsNotEmpty()
    email!:string
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    password!:string
    @Validate(MatchPassword)
    confirmPassword!:string
    @IsOptional()
    @IsString()
    name?:string
    @IsOptional()
    @IsPositive()
    @IsInt()
    age?:number
}