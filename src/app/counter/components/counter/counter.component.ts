import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <!-- <h3>Counter: {{counter}}</h3>
    <button (click)="incrementarValor(+1)">incrementar +1</button>
    <br>
    <button (click)="restablecerDatos()">restablecer</button>
    <br>
    <button (click)="incrementarValor(-1)">Restar -1</button>
    <hr> -->

  `
})

export class  CounterComponent {


  public counter: number = 10


  incrementarValor(value: number):void {

    this.counter +=value;
  }

  restablecerDatos(){

    this.counter = 10;

  }

}
