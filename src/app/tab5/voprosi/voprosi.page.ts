import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router"
import { Location } from '@angular/common';

import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref,  query, orderByChild, equalTo, limitToLast, set, update, child, onValue  } from "firebase/database";

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import * as sha1 from 'js-sha1';

@Component({
  selector: 'app-voprosi',
  templateUrl: './voprosi.page.html',
  styleUrls: ['./voprosi.page.scss'],
})
export class VoprosiPage implements OnInit {

 faqs: Array<{id: number; vopros: string; otvet: string;}> = [];

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  ngOnInit() {


      const config = {
		headers: {


        }
      };



	 this.http.post('http://pokolenie.golddoor.ru/afaq.php', {})






	  .subscribe(
		  data => { // json data




		  //console.log('cnt: ', data);


		   (Object.keys(data)).forEach((key, index) => {
  // 👇️ name Bobby Hadz 0, country Chile 1
  //console.log(Docs[key]['ID']+ ", " + Docs[key]['Doctor']);

  console.log(Object.values(data)[index]["id"]);


     this.faqs.push({
            id: Object.values(data)[index]["id"],
			      vopros: Object.values(data)[index]["vopros"],
					  otvet: Object.values(data)[index]["otvet"]});

});



		   },
		   error => {
			   console.log('Error: ', error);
			  });







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
