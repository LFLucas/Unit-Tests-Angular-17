import { TestBed } from '@angular/core/testing';

import { InvestimentsService } from './investiments.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { Investiment } from '../../models/investiment';
import { MOCK_LIST } from '../../investiments.mock'


describe('InvestimentsService', () => {
  let service: InvestimentsService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  const url: string = 'http://localhost:3000/investiments'
  const mockList: Array<Investiment> = MOCK_LIST

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ HttpClientTestingModule ]
    });

    service = TestBed.inject(InvestimentsService);
    httpTestingController = TestBed.inject(HttpTestingController)
    httpClient = TestBed.inject(HttpClient)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  
  it(`should list all investiments in the investiments getter`, (done) =>{
    service.investiments().subscribe(
      (res: Array<Investiment>) => {
        expect(res[0].name).toEqual("Banco 1")
        expect(res[0].value).toEqual(100)
        expect(res[3].name).toEqual("Banco 4")
        expect(res[3].value).toEqual(100)
        done()
    })
    const req = httpTestingController.expectOne(url)
    req.flush(mockList)
    expect(req.request.method).toEqual('GET')
  })
});
