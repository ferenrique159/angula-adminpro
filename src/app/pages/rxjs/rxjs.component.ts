import { Component, OnDestroy } from '@angular/core';
import { Observable, retry, interval, take, map, filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnDestroy {

  public intervalSubs! : Subscription;

  constructor() {
                  /*  this.retornaObservable().pipe(
                      retry(1)
                    )// Se opto en colocar las llaves y definir cada funcion con su respectivo argumento para que no se colocara en desuso el subscribe, pero ya eso es por algo propio de la libreria rxjs
                    .subscribe({
                      next : valor => console.log('Subs:', valor),
                      error : error => console.warn('Subs:', error),
                      complete : () => console.info('Obs terminado'),
                    });
                  */
    this.intervalSubs = this.retornaIntervalo().subscribe( console.log )
  }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  retornaIntervalo(): Observable<number>{
    return interval(100).pipe(
                              // el argumento take hace que simplemente se frene en el numero colocado, el map te ayuda a transformar el valor traido o concatenarle otro valor
                              // depende de la posicion en que se coloque el take llegara hasta donde se refiera
                              map( valor =>  valor + 1 ),
                              //Estamos indicando que si el valor es par se muestre caso contrario no.
                              filter( valor => (valor % 2 === 0)  ? true : false),
                              //take(10)
                                );
  }

  retornaObservable(){
    let i = 0;

    return new Observable( (observer: any) => {

                //otra forma de poder inicializar este observable es creandole una variable----->       const obs$ = new Observable( (observer: any) => {

                // para poder parar un "setIntervalo" se convierte en variable para poder utilizar otro argumento
      const intervalo =  setInterval( () =>{
        i++;
                // el observer "next" es otro argumento del observable para indicar que es lo siguiente a ejecutar en el observable
        observer.next(i)
        if( i === 8 ){
                // al colocarle el "clearIntervalo" que es propio de javaScript, se frena el setIntervalo y al colocar en la siguiente linea el "complete"...
                // ...podemos decirle que finalizo con un msj en consola.
          clearInterval(intervalo);
          observer.complete();
        }

        if( i === 1 ){
          observer.error('i llego lastimosamente a 0');
        }
      }, 1000)

    });

                // al retornar el obs$ la variable entiende que retorna un observable y puede ser llamada en un proceso de observable.
                //se elimina o coloca en comentario este return ya que se esta haciendo de forma directa en la observable--------->     "return obs$;"
  }


}
