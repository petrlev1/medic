import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dobavit-preparat',
  templateUrl: './dobavit-preparat.page.html',
  styleUrls: ['./dobavit-preparat.page.scss'],
})
export class DobavitPreparatPage implements 
OnInit {

  public dobavitPreparat = ['Хорошо'];
  
constructor () { }

  ngOnInit() {
  }


  quantity:number=1;
  i=1

  plus(){
  if(this.i !=1000) {
  this.i++;
  this.quantity=this.i;
  }
  }

  minus(){
    if(this.i !=1) {
    this.i--;
    this.quantity=this.i;
    }
    }

  
}




