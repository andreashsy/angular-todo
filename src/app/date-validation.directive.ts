import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

/** The due date cannot be in the past */
export function forbiddenDateValidator(date: Date): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = (date > control.value);
    return forbidden ? {forbiddenName: {value: control.value}} : null;
  };
}
