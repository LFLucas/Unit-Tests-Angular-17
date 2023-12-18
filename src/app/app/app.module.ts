import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../app/app.component';
import { BankingModule } from '../banking/banking.module';
import { InvestimentsModule } from '../investiments/investiments.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BankingModule,
    InvestimentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
