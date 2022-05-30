import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUsuarios().then( usuarios => {
      console.log(usuarios);
    } )

    // Recordemos que una promesa te realiza solo una accion asincrona, y para cancelarla es muy dificil.
    //dependera de que una accion tarde mas o tarde menos dependiendo de la tarea a realizar, simplemente finaliza su promesa al abrir toda la aplicación.
    /*
    const promesa = new Promise( (resolve, reject) => {

      if (false) {
        resolve("Sigo siendo primero?");
      }else{
        reject("hubo un gran error");
      }
    })

    // el .then es cuando la promesa corre correctamente
    promesa.then( (mensaje) => {
      console.log(mensaje);
    })// el .catch es para agarrar el error
    .catch( (error) => {
      console.log('error en la promesa', error)
    } )

    console.log('Fin del Init');
  */
  }

  getUsuarios(){
    // Realizando la promesa de esta manera capturo la data especifica buscada y además le hago el llamado en consola gracias al init
    const promesa = new Promise ( resolve => {

      fetch('https://reqres.in/api/users')
    .then( resp => resp.json())
      .then( body => resolve(body.data) )
    });
    return promesa
  }

}
