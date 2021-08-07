import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationDemoComponent } from './animation-demo.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGaurdService } from 'src/app/_services/auth-gaurd.service';

const routes : Routes = [{
  path:'',
  component : AnimationDemoComponent,
  canActivate:[AuthGaurdService]
}]

@NgModule({
  declarations: [AnimationDemoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AnimationDemoModule { }
