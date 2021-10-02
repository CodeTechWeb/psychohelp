import { Injectable } from '@angular/core';
import Peer from 'peerjs';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PeerService {
  peer: any;

  constructor() {
    if (environment.production)
      this.peer = new Peer()
    else
      this.peer = new Peer(undefined, {
        host: 'localhost',
        port: 3001
      })
  }
}
