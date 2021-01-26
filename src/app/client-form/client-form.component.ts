import { Component, OnInit, forwardRef } from '@angular/core';

import {
  FormControl, FormGroup, FormBuilder,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from '@angular/forms';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ClientFormComponent),
      multi: true,
    }]
})
export class ClientFormComponent implements OnInit, ControlValueAccessor {

  constructor(private fb: FormBuilder) { }
  clientFormGroup = this.fb.group({
    name: [''],
    rg: [''],
    email: [''],
    cpf: [''],
    birthdate: [''],
    phone: [''],
    company: [''],
    street: [''],
    number: ['dsf'],
    neighborhood: [''],
    comp: [''],
    zip: [''],
    city: [''],
    state: [''],

  });
  ngOnInit(): void {
  }
  registerOnChange(fn: any): void {
    this.clientFormGroup.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void { }

  writeValue(
    value: {
    }[]
  ): void { }

}
