import { Component, ViewChild, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router"
import { Location } from '@angular/common';
import { IonDatetime } from '@ionic/angular';

import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref,  query, orderByChild, equalTo, limitToLast, set, update, child, onValue  } from "firebase/database";

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import * as sha1 from 'js-sha1';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


 doctors: Array<{doctor: string; id: string, time: string, date: string}> = [];

  constructor(private http: HttpClient) {}



    ngOnInit() {

		this.zapisi(this.doctors);
	}





   zapisi(doctors: any)
	  {
	    const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {

    const uid = user.uid;

   	const starCountRef = ref(getDatabase(), '/users/' + uid + "/auth");

	onValue(starCountRef, (snapshot) => {

		const clogin = snapshot.val().login;
		const cpassw = snapshot.val().passw;

		//console.log(id + " / " + clogin + " / " +cpassw);



  	const config = {
		headers: {

		//  'Content-Type':  'application/json',
        //  'Authorization': 'Basic ' + btoa(unescape(encodeURIComponent('Администратор:By3dy9di')
        }
      };


	 this.http.post('https://rieltorov.net/tmp/medicapi3zapisi.php', {clogin: clogin, cpassw: sha1(cpassw)})
		 
	 
	 .subscribe(
		  data => { // json data


		 //  this.zapismess = "<font color=green><i>Вы успешно записаны к доктору " + doctor + " на " + date + " в " + time + "</i></font>";

		 console.log(Object.values(data)[1]);

		//console.log(Object.values(data)[1][2]['Doctor']);


		Object.values(data)[1].forEach(function (value: any) {
 // console.log(value['ID']);
  doctors.push({doctor: value['Doctor'], id: value['ID'], time: value['BeginTime'], date: value['Date']});
}); 



  


		   },
		   error => {
			   console.log('Error: ', error);
			  });




    }, {
           onlyOnce: true // если данные должны быть получены в реалтайм
          });










  } else {
    // User is signed out
   console.log('not reged');



  }
});

	  }






}
