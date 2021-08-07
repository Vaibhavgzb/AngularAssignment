import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDemoComponent } from './template-demo.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthGaurdService } from 'src/app/_services/auth-gaurd.service';

const routes : Routes = [{
  path:'',
  component: TemplateDemoComponent,
  canActivate:[AuthGaurdService]
}]

@NgModule({
  declarations: [    TemplateDemoComponent  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class TemplateDemoModule { }
