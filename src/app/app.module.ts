import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

import { BirthdaysReducer } from './reducers/birthdays.reducer';
import { BirthdayActions } from './actions/birthday.actions';
//import { NgReduxModule, DevToolsExtension } from '@angular-redux/store';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    StoreModule.forRoot({ birthdays: BirthdaysReducer })
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, BirthdayActions],
  bootstrap: [AppComponent],
})
export class AppModule {}
