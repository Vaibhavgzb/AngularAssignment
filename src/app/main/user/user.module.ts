import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateUserModule } from './create-user/create-user.module';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { AuthGaurdService } from 'src/app/_services/auth-gaurd.service';
import { FilterPipe } from 'src/app/_helper/filter.pipe';

const routes : Routes = [
  {
    path : '',
    component : UserComponent,
    canActivate : [AuthGaurdService]
  }
]

@NgModule({
  declarations: [UserComponent,CreateUserComponent,FilterPipe],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
    // CreateUserModule
  ]
})
export class UserModule { }
