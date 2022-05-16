import { Component, EventEmitter, Input, Output, OnInit} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit{

  ngOnInit(){

    this.btnClass = `btn ${ this.btnClass }`;
    // se implementa este onInit para poder imlpementar la clase personalizada en el html solamente llamando 1 solo btn y no con el previo
  }

  @Input('valor') progress : number = 50;
  //@Input() progress : number = 50;
  @Input() btnClass : string = 'btn btn-primary';
  @Output() valorsalida: EventEmitter<number> = new EventEmitter();
  //@Output('valor') valorsalida: EventEmitter<number> = new EventEmitter(); puedo renombrar ese evento con valor y cambiarlo en el html y seguira funcional

  cambiarValor( valor : number ){

    if( this.progress >= 100 && valor >=0 ){
      this.valorsalida.emit(100);
      return this.progress = 100;
    }if( this.progress <= 0 && valor < 0 ){
      this.valorsalida.emit(0);
      return this.progress = 0;
    }


    this.progress = this.progress + valor;
    this.valorsalida.emit(this.progress);
  }

  onChange( nuevoValor:number ){

    if( nuevoValor >= 100 ){
      this.progress = 100;
    } else if ( nuevoValor <= 0) {
      this.progress = 0;
    } else {
      this.progress = nuevoValor
    }
    // Se hicieron estas condiciones para que no dejara agregar valores mayores a 100 o menores a 0. y se e puso como variable "nuevoValor"

    this.valorsalida.emit(this.progress)
  }

}


