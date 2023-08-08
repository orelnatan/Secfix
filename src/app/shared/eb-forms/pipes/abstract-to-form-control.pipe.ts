import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Pipe({
   name: 'abstractToFormControl',
})
export class AbstractToFormControlPipe implements PipeTransform {
    transform(control: AbstractControl): FormControl {
        return <FormControl>control;
    }
}