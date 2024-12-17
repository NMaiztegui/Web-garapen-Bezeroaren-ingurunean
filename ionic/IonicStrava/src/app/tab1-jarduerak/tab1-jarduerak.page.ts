import { Component, OnInit } from '@angular/core';
import { ApiService} from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Location} from '@angular/common';
import { KlubaService } from '../services/kluba.service';
import { Kluba } from '../classes/kluba';

@Component({
  selector: 'app-tab1-jarduerak',
  templateUrl: './tab1-jarduerak.page.html',
  styleUrls: ['./tab1-jarduerak.page.scss'],
})
export class Tab1JarduerakPage implements OnInit {

  kluba = {} as Kluba; //kluba es  un objeto individual del objeto cluva?
  constructor(private klubaService: KlubaService, private route: ActivatedRoute, private location: Location, private apiService: ApiService,) { }

 
  
  getKluba(): void {
    this.apiService.dbState().subscribe((res) => {
      if(res){
            const id = Number(this.route.snapshot.paramMap.get('id'));
            this.apiService.fetchKluba(id).subscribe(kluba => {
              this.kluba = kluba;
              this.kluba.jarduerak.sort( (a, b): number => {
              return (b.moving_time - a.moving_time);
              });
            }
        )}
    });
   }

  goBack(): void {
   this.location.back();
  }
  ngOnInit() {
    this.getKluba();
  }
 
  

}


