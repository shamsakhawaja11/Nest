import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";

@ValidatorConstraint({name:"MatchPassword",async:false})
export class MatchPassword implements ValidatorConstraintInterface{
    validate(confirmPassword: string, validationArguments?: ValidationArguments): Promise<boolean> | boolean {
        let pass=validationArguments?.object.password;
        return pass===confirmPassword;
    }
    defaultMessage(validationArguments?: ValidationArguments): string {
        return "Password should match ConfirmPassword";
    }
}