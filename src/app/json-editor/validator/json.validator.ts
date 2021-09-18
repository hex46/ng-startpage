import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function jsonValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    try {
      JSON.parse(control.value);
      return null;
    } catch (err: unknown) {
      if (err instanceof Error) {
        return { json: { value: err.message } };
      } else {
        return { json: { value: 'Unknow error!' } };
      }      
    }
  }

}