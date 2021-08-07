import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MessageCommunicateComponent } from './message-communicate.component';
import { AuthGaurdService } from 'src/app/_services/auth-gaurd.service';

const routes : Routes=[{
  path : '',
  component : MessageCommunicateComponent,
  canActivate : [AuthGaurdService]
}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MessageCommunicateModule { }
