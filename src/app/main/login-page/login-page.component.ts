import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginform!: FormGroup;
  submitted = false;

  

  constructor(private fb:FormBuilder,
    private _authenticationServiec : AuthenticationService,
    private _router : Router) {

      if(_authenticationServiec.loggedIn){
        this._router.navigate(['/user']);
      }
   }

  ngOnInit(): void {
    this.loginform = this.fb.group ({
      email : ['',[Validators.required,Validators.email]],
      password : ['',[Validators.required]]
    });
  }

  get f() { return this.loginform.controls; }

  login(){
    this.submitted = true;
    if(this.loginform.invalid){
      return;
    }

    if(this._authenticationServiec.login(this.loginform.get('email')?.value,this.loginform.get('password')?.value)){
      this._router.navigate(['/user']);
    }
    else{
      alert("wrong username and password");
    }
    // console.log(this.loginform.value);
  }

}
