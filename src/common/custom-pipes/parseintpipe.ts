import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class PositiveIntPipe implements PipeTransform{
    transform(value: any, metadata: ArgumentMetadata) {
        console.log('PIPE RUNNING, value =', value, typeof value);
        if(value===undefined||!Number.isInteger(Number(value))||value===""||value<=0){
            throw new BadRequestException('value is invalid')
        }
        return Number(value);
    }
}