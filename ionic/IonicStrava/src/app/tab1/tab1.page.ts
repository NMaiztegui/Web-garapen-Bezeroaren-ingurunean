import { Component,OnInit } from '@angular/core';
import { KlubaService} from '../services/kluba.service';
import { Kluba } from '../classes/kluba';
import { ApiService} from '../services/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  klubak: Kluba[] = [];
  showLoader=true; //barra de carga
  constructor(private apiService: ApiService) {}
  getKlubak(): void{
    this.apiService.dbState().subscribe((res) => {
      if(res){
        this.apiService.fetchKlubak().subscribe(
          data => {this.klubak = data;
              this.showLoader=false;}// cuando tenga todos los datos que desaparezca la barra de carga
        )
      }
    });
  }

  

  ngOnInit(): void {
    this.getKlubak();
  }

  kluba = {
    id: 783189,
    name: 'uni eibar',
    cover_photo_small: 'assets/img/kluba.jpg',
    sport_type: 'running',
    private: true,
    member_count: 3,
    description: 'Lanbide Heziketako Ikastetxea',
    club_type: 'company',
  };
  
}
