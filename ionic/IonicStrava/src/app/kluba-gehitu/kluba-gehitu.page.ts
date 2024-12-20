import { Component, OnInit } from '@angular/core';
import { Kluba } from '../classes/kluba';
import { ApiService } from '../services/api.service'; // todos loa insert, selector y demas cosas con la base de datos se havcen en el services

import { NavController } from '@ionic/angular' // nos permite navegar y decirle donde vaya 

@Component({
  selector: 'app-kluba-gehitu',
  templateUrl: './kluba-gehitu.page.html',
  styleUrls: ['./kluba-gehitu.page.scss'],
})
export class KlubaGehituPage  {

  constructor(private apiService: ApiService, private navCtrl: NavController) {

   }
   // consigue que el elemento cluba se rellene de informacion
   kluba = {} as Kluba;  
   errorMessage= '';
   gehituForm(): void {
     if (!this.kluba) { return; }
     try {
       this.apiService.addKluba(this.kluba);
       this.reset(); // kluba objetua hasieratzeko
       //Hasierako orrira bueltatu
       this.navCtrl.navigateForward('tabs/tab1'); // redireccion
     } catch (error) {
       this.errorMessage = error as any;
     }
   }
   reset(): void {
     this.kluba = {
       id: 0,
       name: '',
       cover_photo_small: '',
       sport_type: '',
       privatea: false,
       member_count: 0,
       description: '',
       club_type: '',
       jarduerak: []
     };
   }

 

}
