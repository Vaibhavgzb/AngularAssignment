import { Component, OnInit } from '@angular/core';
import { EnterLeave,fadeInOut,flyInOut } from 'src/app/_helper/animation';

@Component({
  selector: 'app-template-demo',
  templateUrl: './template-demo.component.html',
  styleUrls: ['./template-demo.component.scss'],
  animations: [EnterLeave,flyInOut,fadeInOut]

})
export class TemplateDemoComponent implements OnInit {

  model: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  addEmployee(){
    
  }
}
