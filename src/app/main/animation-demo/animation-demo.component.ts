import { Component, OnInit } from '@angular/core';
import { balloonEffect, changeDivSize } from 'src/app/_helper/animation';

@Component({
  selector: 'app-animation-demo',
  templateUrl: './animation-demo.component.html',
  styleUrls: ['./animation-demo.component.scss'],
  animations: [changeDivSize,balloonEffect]
})
export class AnimationDemoComponent implements OnInit {

  currentState = 'initial';

  constructor() { }

  ngOnInit(): void {
  }

  changeState(){
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }

}
