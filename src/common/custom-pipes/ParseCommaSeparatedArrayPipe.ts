import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
@Injectable()
export class ParseCommaSeparatedArrayPipe implements PipeTransform{
    transform(value:any, metadata: ArgumentMetadata) {
        if(value===undefined||value===""){
            throw new BadRequestException('invalid value')
        }
        return value.split(',');
    }
}