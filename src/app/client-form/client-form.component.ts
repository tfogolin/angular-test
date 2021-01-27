import { Component, OnInit, forwardRef } from '@angular/core';

import { Client } from '../client.js';
import { validateCpf } from '../utils/validateCpf';
import {
  FormBuilder,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR, Validators
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
  clientFormGroup = this.fb.group({});

  ngOnInit(): void {
    this.setupForm();
  }
  setupForm(value: Client = {} as Client) {

    this.clientFormGroup = this.fb.group({
      id: [value.id, Validators.required],
      name: [value.name, Validators.required],
      rg: [value.rg, Validators.required],
      email: [value.email, Validators.compose([Validators.required, Validators.email])],
      cpf: [value.cpf, Validators.compose([Validators.required, validateCpf])],
      birthdate: [value.birthdate, Validators.required],
      phone: [value.phone, Validators.required],
      company: [value.company, Validators.required],
      street: [value.street, Validators.required],
      number: [value.number, Validators.required],
      neighborhood: [value.neighborhood, Validators.required],
      comp: [value.comp, Validators.required],
      zip: [value.zip, Validators.required],
      city: [value.city, Validators.required],
      state: [value.state, Validators.required],

    });
  }
  registerOnChange(fn: any): void {
    this.clientFormGroup.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void { }

  writeValue(value: Client): void {
    this.setupForm(value);
  }

}
