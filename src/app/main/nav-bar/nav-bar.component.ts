import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Output() onClick = new EventEmitter;

  constructor(private _router : Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.onClick.emit('false');
  }

}
