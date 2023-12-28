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
  selector: 'app-zapisi-detail',
  templateUrl: './zapisi-detail.page.html',
  styleUrls: ['./zapisi-detail.page.scss'],
})
export class ZapisiDetailPage implements OnInit {

id: string;
doctor: string;
time: string;
date: string;
cancel: number;
loader: boolean;

  constructor(private http: HttpClient, private route: ActivatedRoute) {

	    this.id = "";
	  this.doctor = "";
	  this.time = "";
	  this.date = "";
	  this.cancel = 0;
	  this.loader = false;


  }

  ngOnInit() {

	  const auth = getAuth();

	  this.route.queryParams.subscribe(
      params => {
        this.id =  params['id'];
		this.doctor = params['doctor'];
		this.date = params['date'];
		this.time = params['time'];
		//this.cancel = params['cancel'];

		if (params['cancel']==1)
		{
			//console.log("go api");

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

						console.log(params['id'] + " / " + clogin + " / " + sha1(cpassw));

						this.http.post('https://rieltorov.net/tmp/medicapi3zapisd.php', {id: params['id'], clogin: clogin, cpassw: sha1(cpassw)})

						.subscribe(
							data => { // json data
							//  this.zapismess = "<font color=green><i>Вы успешно записаны к доктору " + doctor + " на " + date + " в " + time + "</i></font>";

							   //console.log(Object.values(data)[1]);
							   console.log(Object.values(data)[1]);

							   if (Object.values(data)[1]==true)
							   {
							        this.loader = true;
							        window.location.href = '/tabs/tab2';
							   }

							   //this.titlesList = Object.values(data);
							/*
							   if (Object.values(data)[1]==true)
							   {
								   this.isAlertOpen = true;
							   }
							   else
							   {
								   this.isAlertOpen2 = true;
							   }
							   */
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


		//console.log(this.cancel);


  );

}




 }
