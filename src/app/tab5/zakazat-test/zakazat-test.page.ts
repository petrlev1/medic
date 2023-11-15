import { Component, OnInit } from '@angular/core';

import { MaskitoOptions, MaskitoElementPredicateAsync } from '@maskito/core';

@Component({
  selector: 'app-zakazat-test',
  templateUrl: './zakazat-test.page.html',
  styleUrls: ['./zakazat-test.page.scss'],
})
export class ZakazatTestPage implements OnInit {

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

  

  public alertButtons = ['Хорошо'];

  constructor() { }

  ngOnInit() {
  }

}
