import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms'
import { StorageService } from '../storage-service.service'
import { Client } from '../client'

import { Observable } from 'rxjs';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {


  constructor(private storageService: StorageService, private fb: FormBuilder) {
  }

  clientList!: Array<Client>;
  clientListFiltered!: Array<Client>

  filterForm = this.fb.group({
    filterName: this.fb.control(['']),
    filterCpf: this.fb.control(['']),
    filterState: this.fb.control([''])
  });
  ngOnInit(): void {
    this.clientList = this.storageService.getAllClients();

    this.filterForm.valueChanges.subscribe(val => {
      this.clientListFiltered = this.clientList.filter((client) => {
        return client['name'].includes(val.filterName) && client['cpf'].includes(val.filterCpf) && client['state'].includes(val.filterState)
      });

    });

  }
  deleteClient(event: any, id: number): void {
    event.stopPropagation();
    this.clientList = this.storageService.deleteClient(id);
  }
}
