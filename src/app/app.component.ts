import {Component, OnInit} from '@angular/core';

export interface User{
  id: number,
  name: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  Users: User[];
  user: User | null = null;

    ngOnInit() {
      this.Users = [{id: 1, name: 'Svjat'}, {id: 2, name: 'Loha'}, { id: 3, name: 'Solya'}];
    }

  showUser(user: User) {
    console.log('post', user);
    this.user = user
  }
}
