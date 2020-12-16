import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../app.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit(): void {
  }


}
