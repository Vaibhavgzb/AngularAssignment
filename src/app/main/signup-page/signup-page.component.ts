import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from 'src/app/_helper/must-match.validators';
import { AuthenticationService } from 'src/app/_services/authentication.service';


@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  signupForm!: FormGroup;
  submitted = false;
  userDetail : Array<Isignup>=[];


  constructor(private fb : FormBuilder,
    private _auth : AuthenticationService,
    private _router : Router
    ) {
    if(_auth.loggedIn){
      this._router.navigate(['/message']);
    }
   }

  ngOnInit(): void {
    this.signupForm = this.fb.group ({
      fullName : ['',Validators.required],
      email : ['',[Validators.required,Validators.email]],
      password : ['',Validators.required],
      confirmPassword : ['',Validators.required],
    },{
      validator: MustMatch('password', 'confirmPassword')
  });
  }

  get f(){ return this.signupForm.controls;}

  singUp(){
    this.submitted = true;
    if(this.signupForm.invalid){
      return;
    }
    
    const object = {
      fullname : this.signupForm.get('fullName')?.value,
      email : this.signupForm.get('email')?.value,
      password : this.signupForm.get('password')?.value,
    }

    let temp = JSON.parse(localStorage?.getItem('temp') || '[]');
    
    if(temp.length > 0){
      for(let d of temp){
        this.userDetail.push(d);
      }
    }
    this.userDetail.push(object); 

    localStorage.setItem('data',JSON.stringify(this.userDetail));

    localStorage.setItem('temp',JSON.stringify(JSON.parse(localStorage?.getItem('data') || '[]')))

    alert("signup successfully");
    this.signupForm.reset;
    this._router.navigateByUrl('/login');
    
  }

}

interface Isignup{
  fullname:string;
  email:string;
  password:string;
}
