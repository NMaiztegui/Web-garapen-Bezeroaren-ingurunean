import { Injectable } from '@angular/core';
import { Transaction } from '../classes/transaction';
import { Kluba } from '../classes/kluba';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NetworkService } from './network.service';
import { TransactionService } from './transaction.service';
import { SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class SyncService {
  private storage!: SQLiteObject;

 //url nagusia, orain ip-a jarriko da bestela mobilaren localhost-arekin nahasketa sortzen da
 private url = 'http://192.168.56.1:8000/api/klubak';

  constructor(
    private networkService: NetworkService,
    private httpClient: HttpClient,
    private transactionService: TransactionService
  ) { }

  synchronize() {
    //pending_transactions taulatik dauden lerro bakoitzeko irakurri eta sendTransaction metodora bidali. Gero, synchronize_2 metodora.
    if (this.networkService.getStatus()) { // hay conexion  
        this.transactionService.getPendingTransactions().then(transactions => {
            transactions.forEach(transaction => {
                this.sendTransaction(transaction);
            });
        });
        this.synchronize_2()
    }
  }
  //transakzio bakoitza REST API-ra pasatu modu asinkronoan eta gero transakzioa ezabatu.
  async sendTransaction(transaction: Transaction): Promise<void> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.httpClient.request(transaction.method, transaction.endpoint, { body: transaction.payload, headers: headers } )
      .subscribe({
        next: (response: any) => {
          const kluba: Kluba = response;
          console.log('Received Kluba object:', kluba);
          this.transactionService.removeTransaction(transaction);
        },
        error: (error: any) => {
          console.error('Error synchronizing transaction', error);
        }
      });
  }

  // SQLite-ko taula osoa ezabatu eta REST API-koa deskargatu (azkenengo bertsioan dago) modu asinkronoan eta SQLitekoa kargatu
  
  async synchronize_2(): Promise<void>{
    //lehenengo REST API-aren datu guztiak deskargatu
    this.httpClient.get<Kluba[]>(this.url).subscribe(apiData => {
      //Lokalean dagoen guztia ezabatu
      this.storage.executeSql('DELETE FROM klubas');
      //REST API-an dagoena lokalera pasatu
      apiData.forEach(Record => {
        const { id, name, cover_photo_small, sport_type, privatea, member_count, description, club_type } = Record;
        this.storage.executeSql('INSERT INTO klubas (id, name, cover_photo_small, sport_type, private, member_count, description, club_type) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [id, name, cover_photo_small, sport_type, privatea, member_count, description, club_type]);
      });
    })
  }
} 