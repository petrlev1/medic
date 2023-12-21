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
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

@ViewChild('myDatePicker') myDatePicker : any;

defaultDate : any;

timetit: string;

id: string;
time: string;
date: string;
doctor: string;


zapismess: string;

datajson: Array<{id: string; date: string; doctor: string; time: string;}> = [];
times: Array<{doctor: string; date: string; time: string; checked: string; id: string;}> = [];

currdoctor: string;


  constructor(private location: Location, private route: ActivatedRoute, private router: Router, private http: HttpClient) {
      this.currdoctor = "";
	  this.timetit = "";
	  this.zapismess = "";
	  this.id = "";
	  this.time = "";
	  this.date = "";
	  this.doctor = "";

	   this.route.queryParams.subscribe(
      params => {
        this.currdoctor =  params['doctor'];
         console.log("Currdoctor: ",this.currdoctor);



	 this.http.post('https://rieltorov.net/tmp/medicapi3v.php', {})


	  .subscribe(
		  data => { // json data
		  const dat = 'Data' as string;
		  const Docs = data[dat as keyof typeof data];

		  (Object.keys(Docs) as (keyof typeof Docs)[]).forEach((key, index) => {

			  if (this.currdoctor==Docs[key]['Doctor']){
				 // console.log(Docs[key]['ID']+ ", " + Docs[key]['Date']+ ", " + Docs[key]['Doctor']);
				  //console.log(Docs[key]['ID']+ ", " + Docs[key]['Doctor']);

				 // console.log(Docs[key]);

				   this.datajson.push({
					  id: Docs[key]['ID'],
					  date:  Docs[key]['Date'],
					  doctor: Docs[key]['Doctor'],
					  time: Docs[key]['BeginTime']
					});



				  }

				});

				var selectedDate = Object.values(this.datajson)[0]["date"].split(".");

				// console.log("first: ",selectedDate[2] + "-" + selectedDate[1] + "-" + selectedDate[0]);


				 //console.log("month: ",Object.values(this.datajson)[0]["date"].substr(3,7) + ", ");

				 this.defaultDate = selectedDate[2] + "-" + selectedDate[1] + "-" + selectedDate[0];

var days = [];

				 for(var o in Object.values(this.datajson)) {

		 if (Object.values(this.datajson)[0]["date"].substr(3,7) == Object.values(this.datajson)[o]["date"].substr(3,7))
		 {
			 if (days.indexOf(Object.values(this.datajson)[o]["date"].substr(0,2)) === -1)
			 {
				 days.push(Object.values(this.datajson)[o]["date"].substr(0,2));
			 }
			 //console.log(selectedDate[1] + "." + selectedDate[0] + " / " + Object.values(this.datajson)[o]["id"] + " / " + Object.values(this.datajson)[o]["date"] + " / " + Object.values(this.datajson)[o]["doctor"]);
		 }
	 }

	// console.log(days);
	  this.myDatePicker.dayValues = days;

	  //console.log(selectedDate[0] + "." + selectedDate[1]+ "." + selectedDate[2]);

      // this.GetTime(this.defaultDate);




		   },
		   error => {
			   console.log('Error: ', error);
			  });


  }
    );

  }


// https://stackoverflow.com/questions/57510066/how-can-i-catch-the-material-datepicker-month-pagination-event

 onDateChange( event: any ){




	const days = [];
	this.timetit = "";

	var selectedDate = event.detail.value.split("-");

	//console.log(event.detail.value);

	 for(var o in Object.values(this.datajson)) {

		 if (selectedDate[1] + "." + selectedDate[0] == Object.values(this.datajson)[o]["date"].substr(3,7))
		 {
			 if (days.indexOf(Object.values(this.datajson)[o]["date"].substr(0,2)) === -1)
			 {
				 days.push(Object.values(this.datajson)[o]["date"].substr(0,2));
			 }
			 //console.log(selectedDate[1] + "." + selectedDate[0] + " / " + Object.values(this.datajson)[o]["id"] + " / " + Object.values(this.datajson)[o]["date"] + " / " + Object.values(this.datajson)[o]["doctor"]);
		 }
	 }

	 this.myDatePicker.dayValues = days;

	 //var selectedDate2 = Object.values(this.datajson)[0]["date"].split(".");
	 this.defaultDate = event.detail.value.substr(0,7) + "-" + days[0];

//console.log(event.detail.value);

	 this.GetTime(event.detail.value);

	// console.log(days);

 // console.log(event.detail.value.substr(0,7) + "-" + days[0]); // YYYY-MM date format
}


GetTime(time: string)
	  {

	this.times = [];

	var ftime = time.split('-');

var i=1;

	 for(var o in Object.values(this.datajson)) {

		// console.log(Object.values(this.datajson)[o]);

		 //console.log(ftime[2]+"."+ftime[1]+"."+ftime[0]);
        if (Object.values(this.datajson)[o]['date']==ftime[2]+"."+ftime[1]+"."+ftime[0])
        {


			if (i==1)
			{
				this.times.push({doctor: Object.values(this.datajson)[o]['doctor'],date: Object.values(this.datajson)[o]['date'],time: Object.values(this.datajson)[o]['time'], checked: 'custom-checked',id: Object.values(this.datajson)[o]['id']});


			}else{
				this.times.push({doctor: Object.values(this.datajson)[o]['doctor'],date: Object.values(this.datajson)[o]['date'],time: Object.values(this.datajson)[o]['time'], checked: i+"",id: Object.values(this.datajson)[o]['id']});
			}


		 //console.log(i + " / " + Object.values(this.datajson)[o]['id'] + " / " + Object.values(this.datajson)[o]['date'] + " / " + Object.values(this.datajson)[o]['time']  + " / " + Object.values(this.datajson)[o]['doctor']);
		i++;
		}

	 }
	 if (this.times.length!=0)
	 {
		  this.timetit = "Свободное время";
	 }


	 //console.log(this.times);

	  }




onButtonClick(id: any,time: any,date: any,doctor: any){

this.id = id;
this.time = time;
this.date = date;
this.doctor = this.currdoctor;

console.log(this.id);

/*

	  const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {

    const uid = user.uid;

   	const starCountRef = ref(getDatabase(), '/users/' + uid + "/auth");

	onValue(starCountRef, (snapshot) => {

		const clogin = snapshot.val().login;
		const cpassw = snapshot.val().passw;

		console.log(id + " / " + clogin + " / " +cpassw);



  	const config = {
		headers: {

		//  'Content-Type':  'application/json',
        //  'Authorization': 'Basic ' + btoa(unescape(encodeURIComponent('Администратор:By3dy9di')
        }
      };


	 this.http.post('https://rieltorov.net/tmp/medicapi3zapis.php', {id: id, clogin: clogin, cpassw: sha1(cpassw)})


	 .subscribe(
		  data => { // json data


		   this.zapismess = "<font color=green><i>Вы успешно записаны к доктору " + doctor + " на " + date + " в " + time + "</i></font>";

		 console.log(Object.values(data));

		  //this.titlesList = Object.values(data);


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



*/







}

  ngOnInit() {

	  //this.initMonthObserver();

  }

}
