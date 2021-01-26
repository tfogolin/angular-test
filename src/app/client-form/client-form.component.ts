import { Component, OnInit, forwardRef } from '@angular/core';

import { Client } from '../client.js'

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
    id: [''],
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

  writeValue(value: Client): void {
    this.clientFormGroup = this.fb.group({
      id: [value.id],
      name: [value.name],
      rg: [value.rg],
      email: [value.email],
      cpf: [value.cpf],
      birthdate: [value.birthdate],
      phone: [value.phone],
      company: [value.company],
      street: [value.street],
      number: [value.number],
      neighborhood: [value.neighborhood],
      comp: [value.comp],
      zip: [value.zip],
      city: [value.city],
      state: [value.state],

    });
  }

}
