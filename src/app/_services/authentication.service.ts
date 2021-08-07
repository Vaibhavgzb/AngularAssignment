import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  login( username : string , password : string ) : any{
    var detail : Array<any> = JSON.parse(localStorage.getItem?.('data') || '[]') ;

   var d = detail.find((value) =>{return username == value?.email && password == value?.password});

    if(d){
        localStorage.setItem('currentUser',"logged in");
        return true;
    }
    
  }
  logout(){
    localStorage.removeItem('currentUser');
  }

  public get loggedIn() : boolean{
    return (localStorage.getItem('currentUser') != null);
  }
}
