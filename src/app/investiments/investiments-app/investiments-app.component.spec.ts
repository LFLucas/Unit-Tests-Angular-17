import { ComponentFixture, TestBed } from '@angular/core/testing';

// imports
import { InvestimentsAppComponent } from './investiments-app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { InvestimentsService } from '../services/investiments.service';
import { MOCK_LIST } from '../../investiments.mock';
import { of } from 'rxjs';
import { Investiment } from '../../models/investiment';

describe('InvestimentsAppComponent', () => {
  let component: InvestimentsAppComponent;
  let fixture: ComponentFixture<InvestimentsAppComponent>;
  let service: InvestimentsService
  const mockList: Array<Investiment> = MOCK_LIST

  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ InvestimentsAppComponent ]
    }).compileComponents();
    
    service = TestBed.inject(InvestimentsService)
    fixture = TestBed.createComponent(InvestimentsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should list all investiments', () => {
    spyOn(service, 'investiments').and.returnValue(of(mockList))
    component.ngOnInit()
    fixture.detectChanges()
    expect(service.investiments).toHaveBeenCalledWith()
    expect(component.investiments.length).toBe(4)
  })

  it('interface should list all investiments', () => {
    spyOn(service, 'investiments').and.returnValue(of(mockList))
    component.ngOnInit()
    fixture.detectChanges()
    let investiments = fixture.debugElement.nativeElement.querySelectorAll('.investiment-list li')
    expect(investiments.length).toEqual(4)
    expect(investiments[0].textContent).toEqual('Banco 1 | 100')
    expect(investiments[3].textContent).toEqual('Banco 4 | 100')
  
  })

 });
