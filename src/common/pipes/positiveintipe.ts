import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";

export class PositiveIntPipe implements PipeTransform{
    transform(value: any, metadata: ArgumentMetadata) {
        const parsed=Number(value);
         if(isNaN(parsed)){
            throw new BadRequestException("value must be number");
        }
        else if(value<=0){
            throw new BadRequestException("Value must be greater than 0");
        }return parsed;
    }
}