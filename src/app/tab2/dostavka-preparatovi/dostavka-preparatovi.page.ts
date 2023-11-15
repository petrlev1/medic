import { Component, OnInit } from '@angular/core';

import { MaskitoOptions, MaskitoElementPredicateAsync } from '@maskito/core';

@Component({
  selector: 'app-dostavka-preparatovi',
  templateUrl: './dostavka-preparatovi.page.html',
  styleUrls: ['./dostavka-preparatovi.page.scss'],
})
export class DostavkaPreparatoviPage implements OnInit {

  public sentButtons = ['Хорошо'];


  readonly phoneMask: MaskitoOptions = {
    mask: ['+', '7', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
  };

  readonly cardMask: MaskitoOptions = {
    mask: [
      ...Array(4).fill(/\d/),
      ' ',
      ...Array(4).fill(/\d/),
      ' ',
      ...Array(4).fill(/\d/),
      ' ',
      ...Array(4).fill(/\d/),
      ' ',
      ...Array(3).fill(/\d/),
    ],
  };

  readonly maskPredicate: MaskitoElementPredicateAsync = async (el) => (el as HTMLIonInputElement).getInputElement();


  constructor() { }

  ngOnInit() {
  }

}
