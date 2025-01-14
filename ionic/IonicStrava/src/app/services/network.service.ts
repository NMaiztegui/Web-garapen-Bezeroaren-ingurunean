import { Injectable } from '@angular/core';

import { Network } from '@capacitor/network';


@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  connected = true;

  constructor() {

    this.checkInitialStatus();

    Network.addListener('networkStatusChange', async status => {
      console.log('Network status changed', status);
      this.connected = status.connected;
    });
   }
   //martxan jartzerakoan jakiteko sarea dagoen
   async checkInitialStatus() {
    const status = await Network.getStatus();
    console.log('Hasierako egoera', status);
    this.connected = status.connected;}

   getStatus(): boolean {
    return this.connected;
  }
}
