import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
})
export class RoomComponent implements OnInit {
  currentStream: any;
  userList: Array<any> = []

  constructor() { }

  ngOnInit(): void {
    this.checkMediaDevices()
  }

  checkMediaDevices = () => {
    if(navigator && navigator.mediaDevices) {
      navigator.mediaDevices.getUserMedia({
        audio: false,
        video: true
      })
        .then((stream) => {
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

  addVideoUser = ( stream: any) => {
    this.userList.push(stream)
  }

}
