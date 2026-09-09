import {PartialType} from '@nestjs/mapped-types';
import { CreateUserDto } from './users.CreateUserDto';

export class UpdateUserDto extends PartialType(CreateUserDto){}