import { Injectable } from '@angular/core';
import { Client } from './client.js'

@Injectable({
  providedIn: 'root'
})


export class StorageService {

  constructor() { }
  addClient(newClient: Client): void {

    let clientData: Array<Client> = JSON.parse(localStorage.getItem('clientData') || '[]');
    let id = 1;
    if (clientData.length) {
      clientData.sort((a, b) => { return a['id'] - b['id'] })
      id = clientData[clientData.length - 1]['id'] + 1;
    }
    newClient['id'] = id;

    clientData.push(newClient);

    localStorage.setItem('clientData', JSON.stringify(clientData));

  }

  getClient(id: number): Array<Client> {

    let clientData: Array<Client> = JSON.parse(localStorage.getItem('clientData') || '');
    return clientData.filter((i) => { return i.id == id });

  }
  updateClient(updateClient: Client): void {
    let clientData: Array<Client> = JSON.parse(localStorage.getItem('clientData') || '[]');
    clientData = clientData.map((client: Client) => {
      if (client['id'] == updateClient['id']) {
        return client = updateClient;
      } else {
        return client
      }
    });

    localStorage.setItem('clientData', JSON.stringify(clientData));

  }
  deleteClient(id: number): Array<Client> {
    let clientData: Array<Client> = JSON.parse(localStorage.getItem('clientData') || '[]');
    clientData = clientData.filter((client: Client) => client['id'] != id);

    localStorage.setItem('clientData', JSON.stringify(clientData));
    return clientData

  }
  getAllClients(): Array<Client> {
    let clientData: Array<Client> = JSON.parse(localStorage.getItem('clientData') || '');
    return clientData;
  }
}
