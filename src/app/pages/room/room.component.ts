import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { WebSocketService } from "../../services/web-socket.service";
import { PeerService } from "../../services/peer.service";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
})
export class RoomComponent implements OnInit {
  roomName: any;
  currentStream: any;
  userList: Array<any> = [];

  constructor(
    private route: ActivatedRoute,
    private webSocketService: WebSocketService,
    private peerService: PeerService
  ) {
    this.roomName = route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.checkMediaDevices();
    this.initPeer();
    this.initSocket();
  }

  initPeer = () => {
    const {peer} = this.peerService;

    peer.on('open', (id: any ) => {
      const body = {
        idPeer: id,
        roomName: this.roomName
      };
      this.webSocketService.joinRoom(body);
    });

    peer.on('call', (callEnter: any) => {
      callEnter.answer(this.currentStream);
      callEnter.on('stream', (streamRemote: any) => {
        this.addVideoUser(streamRemote);
      });
    }, (err: any) => {
      console.log('*** ERROR *** Peer call ', err);
    });
  }

  initSocket = () => {
    this.webSocketService.cbEvent.subscribe((res: any) => {
      if (res.name === 'new-user') {
        const {idPeer} = res.data;
        console.log(idPeer)
        this.sendCall(idPeer, this.currentStream);
      }
    })
  }

  checkMediaDevices = () => {
    if(navigator && navigator.mediaDevices) {
      navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true
      })
        .then((stream: any) => {
          this.currentStream = stream;
          this.addVideoUser(stream)
        })
        .catch(() => {
          console.log('No hay permisos')
        })
    } else {
      console.log('No media devices')
    }
  }

  addVideoUser = (stream: any) => {
    this.userList.push(stream);
    const unique = new Set(this.userList);
    this.userList = [...unique];
  }

  sendCall = (idPeer: string, stream: any) => {
    console.log('aaaa')
    const newUserCall = this.peerService.peer.call(idPeer, stream);
    if (!!newUserCall) {
      newUserCall.on('stream', (userStream: any) => {

        this.addVideoUser(userStream);
      })
    }
  }

}
