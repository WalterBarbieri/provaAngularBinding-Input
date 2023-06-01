import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  logStatusChange(index: number, newStatus: string){
    console.log(`Nuovo Stato per l\'utente con ID ${index}: ${newStatus} `);

  }
}
