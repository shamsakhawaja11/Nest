import {IsEmail, IsNotEmpty, IsOptional, IsPositive, IsString, MinLength} from 'class-validator';

export class CreateUserDto{
    @IsEmail()
    @IsNotEmpty()
    email!:string
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    password!:string
    @IsOptional()
    name?:string
    @IsOptional()
    @IsPositive()
    age?:number
}