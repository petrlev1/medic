import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router"
import { Location } from '@angular/common';

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


currdoctor: string;
pickerArray = [2,12,14];

  constructor(private location: Location, private route: ActivatedRoute, private router: Router, private http: HttpClient) {
      this.currdoctor = "";
      this.pickerArray.push(15);

  }



  onDateChange( event: any ){
   this.pickerArray.push(16);
  console.log(event.detail.value); // YYYY-MM date format
}

  ngOnInit() {



   this.route.queryParams.subscribe(
      params => {
        this.currdoctor =  params['doctor'];


      }
    )



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


/*
	 this.http.post('https://rieltorov.net/tmp/medicapi3v.php', {})


	  .subscribe(
		  data => { // json data


		 const dat = 'Data' as string;
     const Docs = data[dat as keyof typeof data];



     (Object.keys(Docs) as (keyof typeof Docs)[]).forEach((key, index) => {


  if (this.currdoctor==Docs[key]['Doctor']){


     console.log(Docs[key]['ID']+ ", " + Docs[key]['Doctor']);



    }


});


		   },
		   error => {
			   console.log('Error: ', error);
			  });


*/















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
