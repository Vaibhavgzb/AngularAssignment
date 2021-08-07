import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path : '',
    redirectTo: 'login',
    pathMatch : 'full'
    },
  {
  path : 'message',
  loadChildren : () => import('./main/message-communicate/message-communicate.module').then(m => m.MessageCommunicateModule)
  },
  {
    path : 'login',
    loadChildren : () => import('./main/login-page/login-page.module').then(m => m.LoginPageModule)
  },
  {
    path : 'signup',
    loadChildren : () => import('./main/signup-page/signup-page.module').then(m => m.SignupPageModule)
  },
  {
    path : 'user',
    loadChildren : () => import('./main/user/user.module').then(m => m.UserModule)
  },
  {
    path : 'animation',
    loadChildren : () => import('./main/animation-demo/animation-demo.module').then(m => m.AnimationDemoModule)
  },
  {
    path : 'template',
    loadChildren : () => import('./main/template-demo/template-demo.module').then(m => m.TemplateDemoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
