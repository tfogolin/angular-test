import {
  Component, OnInit,
} from '@angular/core';
import { ClientFormComponent } from '../client-form/client-form.component'

import {
  FormControl, FormGroup
} from '@angular/forms';

@Component({
  selector: 'app-client-register',
  templateUrl: './client-register.component.html',
  styleUrls: ['./client-register.component.scss'],

})
export class ClientRegisterComponent implements OnInit {

  constructor() { }


  clientRegisterGroup = new FormGroup({ clientForm: new FormControl('') });

  ngOnInit(): void {

  }

  onSubmit(): void {
    console.log(this.clientRegisterGroup.value)
  }

}
