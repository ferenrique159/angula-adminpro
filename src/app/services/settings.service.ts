import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector('#theme');

  constructor() {
    // se coloca primero el localstorage para hacer primeramente el llamado a ver si existe ya un color colocado por el usuario sino el predeterminado
   const url = localStorage.getItem('theme') || './assets/css/colors/default-dark.css;'
   this.linkTheme?.setAttribute('href',url);
    // console.log(url)
  }

  changeTheme(theme:string){

    const url = `./assets/css/colors/${theme}.css`;

    this.linkTheme?.setAttribute('href',url);
    localStorage.setItem('theme', url)
    // console.log(url)

    this.checkCurrentTheme()
  }

  checkCurrentTheme(){

    const links = document.querySelectorAll('.selector');

    // El forEach lo que hace es buscsar todos los elementos html de tal lista y asi indicar sus valores
    links.forEach( elem =>{

      // con el REMOVE se indica que a todos los elementos se le va a remover por predeterminado la clase working
      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme =  this.linkTheme?.getAttribute('href');

      if( btnThemeUrl === currentTheme ){
        elem.classList.add('working')
      }

    } )

  }
}
