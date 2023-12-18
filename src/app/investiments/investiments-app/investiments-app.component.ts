import { Component, OnInit } from '@angular/core';
import { Investiment } from '../../models/investiment';
import { InvestimentsService } from '../services/investiments.service';

@Component({
  selector: 'investiments-app',
  templateUrl: './investiments-app.component.html',
  styleUrl: './investiments-app.component.css'
})

export class InvestimentsAppComponent implements OnInit{
  public investiments: Array<Investiment> = []

  constructor(private investimentsService: InvestimentsService){ }
  
  ngOnInit(): void {
    this.investimentsService.investiments().subscribe(
      res => this.investiments = res
  )}
}
