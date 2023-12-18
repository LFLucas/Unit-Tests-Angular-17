import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestimentsAppComponent } from './investiments-app/investiments-app.component';
import { InvestimentsService } from './services/investiments.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    InvestimentsAppComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    InvestimentsAppComponent
  ],
  providers: [
    InvestimentsService
  ]
})
export class InvestimentsModule { }
