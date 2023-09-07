import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zapisi-detail',
  templateUrl: './zapisi-detail.page.html',
  styleUrls: ['./zapisi-detail.page.scss'],
})
export class ZapisiDetailPage implements OnInit {



  public alertButtons = [
    {
      text: 'Нет',
      cssClass: 'alert-button-cancel',
    },
    {
      text: 'Да',
      cssClass: 'alert-button-confirm',
    },
  ];


  
  constructor() { }

  ngOnInit() {
  }

}
