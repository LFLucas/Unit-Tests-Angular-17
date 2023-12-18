import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingAppComponent } from './banking-app.component';

describe('BankingAppComponent', () => {
  let component: BankingAppComponent;
  let fixture: ComponentFixture<BankingAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BankingAppComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BankingAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });





//criaçao
  it('should create', () => {
    expect(component).toBeTruthy();
  });





//inicializaçao
  it('should have 100 in cCorrente on initialize', () => {
    expect(component.contaCorrente).toEqual(100)
  })

  it('should have 100 in cCarteira on initialize', () => {
    expect(component.contaCorrente).toEqual(100)
    expect(component.clienteCarteira).toEqual(100)
  })



  
// execuçao metodo depositar
  xit('setter method depositar must change the value of cCarteira',() => {
    component.depositar = '10'
    fixture.detectChanges()
    expect(component.contaCorrente).toBe(110)
  })

  xit('setter method depositar must change the value of cCorrente', () => {
    component.depositar = '10'
    fixture.detectChanges()
    expect(component.clienteCarteira).toEqual(90)
  })

  it('setter method depositar must change the value of cCarteira and cCorrente',() => {
    component.depositar = '10'
    fixture.detectChanges()
    expect(component.contaCorrente).toBe(110)
    expect(component.clienteCarteira).toEqual(90)
  })
  
  xit("setter method depositar must not receive a value greater then cCarteira",() => {
    component.depositar = '200'
    expect(component.depositar).not.toBeTruthy()
    expect(component.contaCorrente).toEqual(100)
    expect(component.clienteCarteira).toEqual(100)
  })
  
  xit("setter method depositar must not receive a string",() => {
    component.depositar = 'string'
    expect(component.depositar).not.toBeTruthy()
    expect(component.contaCorrente).toEqual(100)
    expect(component.clienteCarteira).toEqual(100)
  })
  
  it("setter method depositar must not receive a string or a value greater then cCarteira",() => {
    component.depositar = 'string'
    expect(component.depositar).not.toBeTruthy()
    component.depositar = '200'
    expect(component.depositar).not.toBeTruthy()
    expect(component.contaCorrente).toEqual(100)
    expect(component.clienteCarteira).toEqual(100)
  })
  
  



// execuçao metodo sacar
  xit('setter method sacar(valor:string) must change the value of cCarteira',() => {
    component.sacar = '10'
    fixture.detectChanges()
    expect(component.contaCorrente).toBe(90)
  })

  xit('setter method sacar(valor:string) must change the value of cCorrente', () => {
    component.sacar = '10'
    fixture.detectChanges()
    expect(component.clienteCarteira).toEqual(110)
  })

  it('setter method sacar(valor:string) must change the value of cCarteira and cCorrente',() => {
    component.sacar = '10'
    fixture.detectChanges()
    expect(component.contaCorrente).toBe(90)
    expect(component.clienteCarteira).toEqual(110)
  })
  
  xit("setter method sacar must not receive a value greater then cCorrente",() => {
    component.sacar = '200'
    expect(component.sacar).not.toBeTruthy()
    expect(component.contaCorrente).toEqual(100)
    expect(component.clienteCarteira).toEqual(100)
  })
  
  xit("setter method sacar must not receive a string",() => {
    component.sacar = 'string'
    expect(component.sacar).not.toBeTruthy()
    expect(component.contaCorrente).toEqual(100)
    expect(component.clienteCarteira).toEqual(100)
  })
  
  it("setter method sacar must not receive a string or a value greater then cCorrente",() => {
    component.sacar = 'string'
    expect(component.depositar).not.toBeTruthy()
    component.sacar = '200'
    expect(component.sacar).not.toBeTruthy()
    expect(component.contaCorrente).toEqual(100)
    expect(component.clienteCarteira).toEqual(100)
  })
  



  
  //verifica o evento de click nos botoes
  it(`depositar should transfer from cCarteira to cCorrente`, () =>{ 
    let element = fixture.debugElement.nativeElement
    element.querySelector("#depositar").value = '10'
    element.querySelector("#depositar-btn").click()
    fixture.detectChanges()
    expect(component.contaCorrente).toEqual(110)
    expect(component.clienteCarteira).toEqual(90)
  })

  it(`sacar should transfer from cCorrente to cCarteira`, () =>{ 
    let element = fixture.debugElement.nativeElement
    element.querySelector("#sacar").value = '10'
    element.querySelector("#sacar-btn").click()
    fixture.detectChanges()
    expect(component.contaCorrente).toEqual(90)
    expect(component.clienteCarteira).toEqual(110)
  })

  
});
