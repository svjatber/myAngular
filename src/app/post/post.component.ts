import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Route} from '@angular/router';
import {AppServices} from '../app.services';
import {User} from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: User
  constructor(private route: ActivatedRoute, private service: AppServices) { }

  ngOnInit(){
    this.route.params.subscribe((params: Params )=>{
      this.service.showUser(+params.id).subscribe((post)=>{
        this.post = post
      })
    })
  }

}
