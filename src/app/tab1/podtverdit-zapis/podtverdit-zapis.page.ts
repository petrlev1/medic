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
  selector: 'app-podtverdit-zapis',
  templateUrl: './podtverdit-zapis.page.html',
  styleUrls: ['./podtverdit-zapis.page.scss'],
})
export class PodtverditZapisPage implements OnInit {


id: string;
doctor: string;
time: string;
date: string;
isAlertOpen: boolean;
isAlertOpen2: boolean;

  public alertButtons = ['Хорошо'];



  constructor(private route: ActivatedRoute, private http: HttpClient) { 

	  this.id = "";
	  this.doctor = "";
	  this.time = "";
	  this.date = "";

	  this.isAlertOpen = false;
	  this.isAlertOpen2 = false;
  }

  ngOnInit() {


	   this.route.queryParams.subscribe(
      params => {
        this.id =  params['id'];
		this.doctor = params['doctor'];
		this.date = params['date'];
		this.time = params['time'];


      }
    )

//console.log(this.id);










 








  }


  podtverdit(id: any)
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


	 this.http.post('https://rieltorov.net/tmp/medicapi3zapis.php', {id: id, clogin: clogin, cpassw: sha1(cpassw)})
		 
	 
	 .subscribe(
		  data => { // json data


		 //  this.zapismess = "<font color=green><i>Вы успешно записаны к доктору " + doctor + " на " + date + " в " + time + "</i></font>";

		 console.log(Object.values(data)[1]);

		  //this.titlesList = Object.values(data);

		  if (Object.values(data)[1]==true)
		  {
			  this.isAlertOpen = true;
		  }
		  else
		 {
			   this.isAlertOpen2 = true;
		 }

		  


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