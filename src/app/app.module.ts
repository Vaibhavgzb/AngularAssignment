import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationInterceptorInterceptor } from './_authentication/authentication-interceptor.interceptor';
import { NavBarComponent } from './main/nav-bar/nav-bar.component';
import { AnimationDemoComponent } from './main/animation-demo/animation-demo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TemplateDemoComponent } from './main/template-demo/template-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthenticationInterceptorInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
