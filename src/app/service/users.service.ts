import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: User[] = [];

  constructor() { }

  createUser(nome: string) {
    this.users.push({nome, stato: 'Occupato' });
    console.log(this.users);

  }

  updateUser(index: number, newStatus: string ) {
    this.users[index].stato = newStatus;
  }
}
