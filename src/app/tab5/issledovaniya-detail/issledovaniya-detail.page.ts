import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { ViewChild } from '@angular/core';
import zoomPlugin from 'chartjs-plugin-zoom';
Chart.register(zoomPlugin);

import { ActivatedRoute } from '@angular/router';
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref,  query, orderByChild, equalTo, limitToLast, set, update, child, onValue  } from "firebase/database";

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import * as sha1 from 'js-sha1';

@Component({
  selector: 'app-issledovaniya-detail',
  templateUrl: './issledovaniya-detail.page.html',
  styleUrls: ['./issledovaniya-detail.page.scss'],
})
export class IssledovaniyaDetailPage implements OnInit {

  public chart: any;

  coinPrice: any;



profs: Array<{type: string; date: string; result: number; diffdays: number;}> = [];

titlesList: Array<{type: string; date: string; result: string; diffdays: number;}> = [];

typei: number;
typein: string;






  constructor(private route: ActivatedRoute,private http: HttpClient) {

  this.typei = 0;
  this.typein = "";

  }

  ngOnInit() {

   // this.createChart();






 this.route.queryParams.subscribe(
      params => {
        this.typei =  params['type'];


      }
    )





















  const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {

    const uid = user.uid;





















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

		  this.titlesList = Object.values(data);
		  //console.log("data: ",data);
		  //console.log('cnt: ', Object.values(data)[1].length);
		  // console.log('val: ', Object.keys(Object.values(data)[1]));


		  this.typein = Object.keys(Object.values(data)[1])[this.typei];


var test_v = Object.values(data)[1][Object.keys(Object.values(data)[1])[this.typei]].reverse();

			  for(var d in test_v) {
				  //console.log('key3: ',Object.values(Object.values(data)[1])[this.typei]);

				  this.profs.push({
					  type: Object.keys(Object.values(data)[1])[1],
					  date: Object.values(data)[1][Object.keys(Object.values(data)[1])[this.typei]][d]["Дата"],
					  result: Object.values(data)[1][Object.keys(Object.values(data)[1])[this.typei]][d]["Результат"].
					  replace(",", ".").replace(String.fromCharCode(160), ""),
					  diffdays: 0});


					  }



    this.chart = new Chart("MyChart2", {

      type: 'line',
  data: {
    labels:  this.profs.map(row => row.date),
    datasets: [{
      label: this.typein,
      data:   this.profs.map(row => row.result),
      //data:   test.map(row => row.count),
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  },
  options: {
    plugins: {
      zoom: {
        pan: {
          enabled: true,
          //mode: 'x',
          //threshold: 10,
        },
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true
          },
          mode: 'y',
          //overScaleMode: 'x',
        }
      }
    }
  }

    });












					  // dataArray.push(dataObject[o]);

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
