import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class NotzeroNorNegative implements Validator {
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const value = control.value;
    if (value <= 0) {
      return { zeroOrNegative: true };
    }
    return null;
  }
}
