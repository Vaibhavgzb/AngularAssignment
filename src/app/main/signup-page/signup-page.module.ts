import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignupPageComponent } from './signup-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGaurdService } from 'src/app/_services/auth-gaurd.service';

const routes : Routes = [
  {
    path:'',
    component:SignupPageComponent
    }
]

@NgModule({
  declarations: [SignupPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class SignupPageModule { }
