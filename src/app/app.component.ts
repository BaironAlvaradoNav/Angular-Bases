import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public title: string = 'Hola mundo';
  public counter: number = 10


  incrementarValor(value: number):void {

    this.counter +=value;
  }

  restablecerDatos(){

    this.counter = 10;

  }

}
