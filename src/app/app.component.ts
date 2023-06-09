import { Component } from '@angular/core';
import { UsersService } from './service/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prove_mattina';

  users = this.userSrv.users;

  constructor (private userSrv: UsersService) {}
}
