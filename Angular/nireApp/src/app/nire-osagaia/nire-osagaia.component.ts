import { Component } from '@angular/core';
import { AnyARecord } from 'node:dns';

@Component({
  selector: 'app-nire-osagaia',
  templateUrl: './nire-osagaia.component.html',
  styleUrl: './nire-osagaia.component.css'
})
export class NireOsagaiaComponent {
  langilea = {
    izena: 'Pepe',
    abizena: 'Perez',
    generoa: 'gizona',
    irudia:'/assets/caraMujer.jpg'
    };
    langileak = [
      { izena: "Pepe", abizena: "Perez", generoa: "gizona", soldata: 1000, likes:0 },
      { izena: "Sara", abizena: "Ruiz", generoa: "emakumea", soldata: 1000, likes:0 },
      { izena: "Paul", abizena: "Elorza", generoa: "gizona", soldata: 1500, likes:0 },
      { izena: "Raul", abizena: "Txakartegi", generoa: "gizona", soldata: 2000, likes:0 }
      ];
  Title="Langileen zerrenda";
  getTitle() {
    return this.Title;
  };
  gehituLikes(langi:any):void{
    console.log('el boton ha sido presionado');
    langi.likes++;
  }
  myText='Este es mi texto de prueba con variables'
  rowStart = 0; //representa el primero de la lista que se va mostrar
  rowLimit = 3; // y el ultimo de la lista que se va a mostrar en la pantala
  kenduRow() {
    this.rowStart -= 2;
    this.rowLimit -= 2;
  }
  gehituRow() {
    this.rowStart += 2;
    this.rowLimit += 2;
  }

}
