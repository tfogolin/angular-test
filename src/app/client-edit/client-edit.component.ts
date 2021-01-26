import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage-service.service'
import { Client } from '../client'
import {
  FormControl, FormGroup, FormBuilder
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClientFormComponent } from '../client-form/client-form.component';


@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.scss']
})
export class ClientEditComponent implements OnInit {

  constructor(private storageService: StorageService, private route: ActivatedRoute, private fb: FormBuilder,) { }

  clientEditGroup = this.fb.group({ clientForm: this.fb.control({}) });
  clientEdit!: Client;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {

      var id = Number(params.get('id'));

      this.clientEdit = this.storageService.getClient(id)[0];
      console.log(this.clientEditGroup.get('clientForm'))
      console.log(this.clientEditGroup.get('clientForm')?.setValue(this.clientEdit))

    });


  }

  onSubmit(): void {
    this.storageService.updateClient(this.clientEditGroup.value.clientForm)
  }

}
