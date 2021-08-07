import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { MessageService } from 'src/app/_services/message.service';

@Component({
  selector: 'app-message-communicate',
  templateUrl: './message-communicate.component.html',
  styleUrls: ['./message-communicate.component.scss']
})
export class MessageCommunicateComponent implements OnInit {

  count : number = 0;

  constructor(private messageService : MessageService,
    private _auth : AuthenticationService,
    private _router : Router) { 
  }

  ngOnInit(): void {
  }

  sendMessage(){
    this.messageService.sendMessage("Message Send"+ (++this.count));
  }

  clearMessage(){
    this.messageService.clearMessage();
    this.count=0;
  }

  logout(){
    this._auth.logout();
    this._router.navigate(['']);
  }
}
