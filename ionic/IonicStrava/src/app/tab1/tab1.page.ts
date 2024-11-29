import { Component,OnInit } from '@angular/core';
import { KlubaService} from '../services/kluba.service';
import { Kluba } from '../classes/kluba';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  klubak: Kluba[] = [];
  constructor(private klubaService: KlubaService) {}

  getKlubak(): void{
    this.klubaService.getKlubak()
      .subscribe(data => {this.klubak = data; },
          error => console.log('Error::' + error)); 
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
