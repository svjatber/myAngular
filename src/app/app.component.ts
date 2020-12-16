import {Component, OnInit} from '@angular/core';
import {AppServices} from './app.services';

export interface User{
  id: number,
  name: string,
  username: string,
  email: string,
  address?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  Users: User[];
  user: User | null = null;

  constructor(private services: AppServices) {
  }

    ngOnInit() {
       this.services.getUser().subscribe(users => this.Users = users);
    }


}
