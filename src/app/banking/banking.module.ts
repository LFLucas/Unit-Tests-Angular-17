import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankingAppComponent } from './banking-app/banking-app.component';



@NgModule({
  declarations: [ BankingAppComponent ],
  imports: [ CommonModule ],
  exports: [ BankingAppComponent]
})
export class BankingModule { }
