import { Component } from '@angular/core';

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
      { izena: "Pepe", abizena: "Perez", generoa: "gizona", soldata: 1000 },
      { izena: "Sara", abizena: "Ruiz", generoa: "emakumea", soldata: 1000 },
      { izena: "Paul", abizena: "Elorza", generoa: "gizona", soldata: 1500 },
      { izena: "Raul", abizena: "Txakartegi", generoa: "gizona", soldata: 2000 }
      ];
  Title="Langileen zerrenda";
  getTitle() {
    return this.Title;
  }
}
