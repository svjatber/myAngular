import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../app.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() user: User;
  @Output() onAdd: EventEmitter<User> = new EventEmitter<User>();

  constructor() { }

  ngOnInit(): void {
  }

  showUser() {
    this.onAdd.emit(this.user);
  }
}
