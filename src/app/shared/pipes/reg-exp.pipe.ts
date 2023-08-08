import { Pipe, PipeTransform } from '@angular/core';

const RegexParser = require("regex-parser");

@Pipe({
   name: 'regExp',
})
export class RegExpPipe implements PipeTransform {
    transform(value: string, expressions?: Array<string | RegExp>): string { 
        expressions?.forEach((regExp: string | RegExp) => {
            value = value.replace(RegexParser(regExp), '');
        })

        return value;
    }
}