import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { RecentOrderComponent } from './components/recent-order/recent-order.component';
import { NewUserRegistrationComponent } from './components/new-user-registration/new-user-registration.component';
import { TopdatacardComponent } from './components/topdatacard/topdatacard.component';
import { LeftNavigationComponent } from './components/left-navigation/left-navigation.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    RecentOrderComponent,
    NewUserRegistrationComponent,
    TopdatacardComponent,
    LeftNavigationComponent,
    TopNavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatProgressBarModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'), 
    }),
     BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
