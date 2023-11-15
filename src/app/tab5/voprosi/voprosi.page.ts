import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voprosi',
  templateUrl: './voprosi.page.html',
  styleUrls: ['./voprosi.page.scss'],
})
export class VoprosiPage implements OnInit {

  constructor() { }

  ngOnInit() {

  }


     //readmore variable, its true than read more string will print
     ReadMore:boolean = true

     //hiding info box
     visible:boolean = false
   
   
     //onclick toggling both
     onclick1()
     {
       this.ReadMore = !this.ReadMore; //not equal to condition
       this.visible = !this.visible
     }
     


}
