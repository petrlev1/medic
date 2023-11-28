import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router"
import { Location } from '@angular/common';

import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref,  query, orderByChild, equalTo, limitToLast, set, update, child, onValue  } from "firebase/database";

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import * as sha1 from 'js-sha1';





@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


 doctors: Array<{doctor: string;}> = [];


  constructor(private location: Location, private route: ActivatedRoute, private router: Router, private http: HttpClient) {

  }






   ngOnInit() {




  const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {

    const uid = user.uid;

console.log(uid);




   	const starCountRef = ref(getDatabase(), '/users/' + uid + "/auth");

	onValue(starCountRef, (snapshot) => {

		const clogin = snapshot.val().login;
		const cpassw = snapshot.val().passw;

		console.log(clogin);



  	const config = {
		headers: {


        }
      };



	 this.http.post('https://rieltorov.net/tmp/medicapi3v.php', {})






	  .subscribe(
		  data => { // json data


	//	  console.log('cnt: ', data[1]);


		  //console.log('cnt: ', Object.values(data)[1].length);
		 //  console.log('val: ', Object.values(Object.values(data)[1]));


		 const dat = 'Data' as string;
     const Docs = data[dat as keyof typeof data];



 const datt = 'Date' as string;


    //console.log('cnt: ',  Docs[datt]);

     const doctor = 'Date' as any;

     const res = Docs[doctor as keyof typeof Docs];

     (Object.keys(Docs) as (keyof typeof Docs)[]).forEach((key, index) => {
  // 👇️ name Bobby Hadz 0, country Chile 1
  //console.log(Docs[key]['ID']+ ", " + Docs[key]['Doctor']);

  if (this.doctors.indexOf(Docs[key]['Doctor']) === -1)
     this.doctors.push(Docs[key]['Doctor']);
});

    console.log('Doc: ', this.doctors);



		 //  const arr = Object.values(Object.values(data)[1]);

    //  const DoctorStr = 'Doctor' as string;
     // const types = data[DoctorStr as keyof typeof data];
      // const typer = Object.values(Object.values(data)[1]) as string;

      // const res = types[typer as keyof typeof types];




     // const Doctor = arr[DoctorStr as keyof typeof arr];

     // console.log('Doc: ', Doctor);


		  // const DateTime = 'DateTime' as string;
		  // const dat = 'Data' as string;



		  // const types = data[dat as keyof typeof data];

/*
		    const pcr = 'ПЦР' as string;


		  console.log('ARRAY: ',types[pcr as keyof typeof types][7]);

		   var i = 0;

		  for(var o in Object.keys(Object.values(data)[1])) {


			  const lastsarr = this.GetLast(Object.keys(Object.values(data)[1])[i],data);


		   const datev = 'Дата' as string;
		   const datelst = lastsarr[datev as keyof typeof lastsarr];

		    const resv = 'Результат' as string;
		   const reslst = lastsarr[resv as keyof typeof lastsarr];


               console.log("last el: ", datelst);




			    this.profs.push({
			      typei: i,
					  type: Object.keys(Object.values(data)[1])[i],
					  date: datelst,
					  result: reslst,
					  diffdays: 0});



					  i++;
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
