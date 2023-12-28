import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router"
import { Location } from '@angular/common';

import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref,  query, orderByChild, equalTo, limitToLast, set, update, child, onValue  } from "firebase/database";

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import * as sha1 from 'js-sha1';

@Component({
  selector: 'app-issledovaniya',
  templateUrl: './issledovaniya.page.html',
  styleUrls: ['./issledovaniya.page.scss'],
})
export class IssledovaniyaPage implements OnInit {


test: number;

loader: boolean;




 //profs: Array<{sovp: number; imya: string; img: string; rot: string; distm: string;}> = [];

 profs: Array<{typei: number; type: string; date: string; result: string; diffdays: number;}> = [];

titlesList: Array<{typei: number; type: string; date: string; result: string; diffdays: number;}> = [];



constructor(private location: Location, private route: ActivatedRoute, private router: Router, private http: HttpClient) {

const authd = location.getState();
//console.log("DATA: ",authd.example);


  this.test = 0;
  this.loader = true;


  }

   getDiffDays(sDate:any, eDate:any) {
    var startDate = new Date(sDate);
    var endDate = new Date(eDate);

    var Time = endDate.getTime() - startDate.getTime();

    if (Time < 0) return 0;

    else{



    var test = Time / (1000 * 3600 * 24);



    return Math.round(test);
    }
  }

  GetLast(type: string, data: object)
	  {

		   const dat = 'Data' as string;
		   const types = data[dat as keyof typeof data];
		   const typer = type as string;

			const res = types[typer as keyof typeof types];

		//console.log('RES: ',Object.keys(res).length);


	  return res[Object.keys(res).length-1];
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

		//  'Content-Type':  'application/json',
        //  'Authorization': 'Basic ' + btoa(unescape(encodeURIComponent('Администратор:By3dy9di')
        }
      };

	//  this.http.get('https://rieltorov.net/tmp/medicapi2.php',config)


	 this.http.post('https://rieltorov.net/tmp/medicapi3.php', {clogin: clogin, cpassw: sha1(cpassw)})


	  //this.http.get('https://rieltorov.net/tmp/medicapi.php',config)






	  .subscribe(
		  data => { // json data

		  this.loader = false;

		  this.titlesList = Object.values(data);
		  //console.log('cnt: ', Object.values(data)[1].length);
		   //console.log('val: ', Object.keys(Object.values(data)[1]));

		   const DateTime = 'DateTime' as string;
		   const dat = 'Data' as string;

		   const types = data[dat as keyof typeof data];


		    const pcr = 'ПЦР' as string;


		  console.log('ARRAY: ',types[pcr as keyof typeof types][7]);

		   var i = 0;

		  for(var o in Object.keys(Object.values(data)[1])) {
			  // console.log('key2: ',Object.keys(Object.values(data)[1])[i]);

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

			   /*
			  for(var d in Object.values(data)[1][Object.keys(Object.values(data)[1])[o]]) {
				  console.log('key3: ',Object.keys(Object.values(data)[1])[o]);

				  this.profs.push({
					  type: Object.keys(Object.values(data)[1])[o],
					  date: Object.values(data)[1][Object.keys(Object.values(data)[1])[o]][d]["Дата"],
					  result: Object.values(data)[1][Object.keys(Object.values(data)[1])[o]][d]["Результат"],
					  diffdays: 0});

					  //  console.log('key: ', Object.values(data)[1][Object.keys(Object.values(data)[1])[o]][d]["Дата"]);

					  }

					  // dataArray.push(dataObject[o]);

					  */

					  i++;
				}
		   },
		   error => {
			   console.log('Error: ', error);
			  });


















	  /*
	  .subscribe(
		  data => { // json data

		  this.titlesList = Object.values(data);
		  //console.log('cnt: ', Object.values(data)[1].length);
		  // console.log('val: ', Object.keys(Object.values(data)[1]));

		  for(var o in Object.keys(Object.values(data)[1])) {
			  // console.log('key2: ',Object.keys(Object.values(data)[1]));
			  for(var d in Object.values(data)[1][Object.keys(Object.values(data)[1])[o]]) {
				  //console.log('key3: ',Object.keys(Object.values(data)[1])[o]);

				  this.profs.push({
					  type: Object.keys(Object.values(data)[1])[o],
					  date: Object.values(data)[1][Object.keys(Object.values(data)[1])[o]][d]["Дата"],
					  result: Object.values(data)[1][Object.keys(Object.values(data)[1])[o]][d]["Результат"],
					  diffdays: 0});

					  //  console.log('key: ', Object.values(data)[1][Object.keys(Object.values(data)[1])[o]][d]["Дата"]);

					  }

					  // dataArray.push(dataObject[o]);
				}
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





























    /*



let dict = new Map<string, string>();

dict.set("cd4", "СД4");
dict.set("pcr", "ПЦР");

//console.log(dict.get('cd4'));

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {

    const uid = user.uid;

   // console.log('Reged2!!' + uid);

    //this.ProfName = "Privet " + uid + " !";






    const db = getDatabase();



   	const starCountRef = ref(db, '/users');




onValue(starCountRef, (snapshot) => {



  const data = snapshot.val();


});


onValue(ref(db, '/users/' + uid), (poisk) => {


    let res = query(ref(db, '/users/' + uid + '/tests'));





    onValue(res, (snapshot) => {




	    snapshot.forEach((childSnapshot) =>
		{
			const childKey = childSnapshot.key;



            const childData = childSnapshot.val();


this.test = this.getDiffDays(new Date(this.profs[this.profs.length-1]?.date.split(".", 3)[1] + "/" + this.profs[this.profs.length-1]?.date.split(".", 3)[0] + "/" + this.profs[this.profs.length-1]?.date.split(".", 3)[2]), new Date(childSnapshot.val().date.split(".", 3)[1] + "/" + childSnapshot.val().date.split(".", 3)[0] + "/" + childSnapshot.val().date.split(".", 3)[2]));


if (!this.test) this.test = 0;

            	this.profs.push({type: dict.get(childSnapshot.val().type) as string, date: childSnapshot.val().date,result: childSnapshot.val().result, diffdays: this.test});







            let so_ob = 0;

            let im = "/assets/images/photoEmpt.png";











        });





        }, {
           onlyOnce: true // если данные должны быть получены в реалтайм
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


}
