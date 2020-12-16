import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './app.component';
import {Observable} from 'rxjs';
import {filter} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AppServices{

  url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  showUser(id: number): Observable<User>{
    return  this.http.get<User>(`${this.url}/${id}`)
  }
}
