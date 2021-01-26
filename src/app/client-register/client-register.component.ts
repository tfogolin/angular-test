import {
  Component, OnInit,
} from '@angular/core';

import { StorageService } from '../storage-service.service'

import {
  FormControl, FormGroup
} from '@angular/forms';

@Component({
  selector: 'app-client-register',
  templateUrl: './client-register.component.html',
  styleUrls: ['./client-register.component.scss'],

})
export class ClientRegisterComponent implements OnInit {

  constructor(private storageService: StorageService) { }


  clientRegisterGroup = new FormGroup({ clientForm: new FormControl('') });

  ngOnInit(): void {
    console.log(this.storageService)
  }

  onSubmit(): void {
    this.storageService.addClient(this.clientRegisterGroup.value.clientForm)
    console.log(this.clientRegisterGroup.value)
  }

}
