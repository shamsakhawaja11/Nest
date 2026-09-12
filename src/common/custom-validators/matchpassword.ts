import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { CreateUserDto } from "src/users/users.CreateUserDto";

@ValidatorConstraint({name:"MatchPassword",async:false})
export class MatchPassword implements ValidatorConstraintInterface{
    validate(confirmPassword: string, args:ValidationArguments): Promise<boolean> | boolean {
        let pass=(args.object as CreateUserDto).password;
        return pass===confirmPassword;
    }
    defaultMessage(validationArguments?: ValidationArguments): string {
        return "Password should match ConfirmPassword";
    }
}