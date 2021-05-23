import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  qrcode:any;
  qrtext:any;
  generateBtn:any;
  downloadBtn:any;
  constructor() { }

  ngOnInit(): void {

    this.qrcode = this.select("img");
    this.qrtext = this.select("textarea");
    this.generateBtn = this.select("button");
    this.downloadBtn = this.select("a");
    this.generateQR();

  }
  generateQR() {
    let data =  this.guid();
    let url = 'http://api.qrserver.com/v1/create-qr-code?data=' + data + '&size=1000x100';

    this.qrcode.src = url;
    this.downloadBtn.href = url;
    this.qrtext.value = "";
  }


  guid():string {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

  select(el: string) {
    return document.querySelector(el);
  }
}
