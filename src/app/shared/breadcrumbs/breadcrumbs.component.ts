import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from "rxjs/operators";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public titulo!: string;
  public tituloSubs$!: Subscription;

  constructor( private route: Router ) {
    this.tituloSubs$ = this.getOptimizacionRuta()
                                    .subscribe( ({ title }) => {
                                       this.titulo = title;
                                       document.title =  `AdminPro - ${title}`;
                                    });
  }
  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  getOptimizacionRuta(){
    // Se llama a la rutas ya que ahi es donde estan especificadas los nombres y se le colocan los filters para ir desenglozando la data mostrada, al ya llegar al activationEnd buscado y unico
    //... se le coloca el map para asi seleccionar el unico argumento deseado del child

    return this.route.events
    .pipe(
      filter((event): event is ActivationEnd => event instanceof ActivationEnd),
      filter ( (event: ActivationEnd) => event.snapshot.firstChild === null ),
      map ( (event: ActivationEnd) => event.snapshot.data ),
    )
  }

}
