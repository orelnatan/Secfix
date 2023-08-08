import { Pipe, PipeTransform } from '@angular/core';
import { ICrumb } from '../models';

@Pipe({
   name: 'visibility',
})
export class VisibilityPipe implements PipeTransform {
    transform(crumb: ICrumb, parent: string): boolean {
        if(crumb.skip) return false;

        return crumb.parent ? crumb.parent == parent : true;
    }
}