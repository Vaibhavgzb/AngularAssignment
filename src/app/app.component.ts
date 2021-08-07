import {  AfterContentChecked, Component, OnDestroy, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from './_services/authentication.service';
import { MessageService } from './_services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy,AfterContentChecked {
  title = 'AngularAssignment';
  message: any[]=[];
  subscription: Subscription = new Subscription;
  logged!:boolean;

  constructor(private messageService: MessageService,
    public auth : AuthenticationService,
    private _router : Router){


    messageService.getMessage().subscribe((res)=>{
      if(res){
        this.message.push(res);
      }
      else{
        this.message=[];
      }
      
    });
  }
  ngAfterContentChecked(): void {
    if(this.auth.loggedIn){
      this.logged=true;
    }
  }
 
  logout(event : any){
    this.logged=event;
localStorage.removeItem('currentUser')
      this._router.navigateByUrl('/login');
    }
  

  

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  
}
