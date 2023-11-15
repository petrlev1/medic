import {Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

import { getDatabase, ref, set } from "firebase/database";

import * as $ from 'jquery';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


isValid = false;

loginForm: any = {
  login: '',
  password: '',
}

  constructor(private router: Router,private http: HttpClient) {




  }

  ngOnInit() {
	 // this.loginf();




  }

  SignIn(){

	  console.log(this.loginForm.login + "," + this.loginForm.password);

	   var username = 'tester';
	   var password = 'By3dy9di';

    // Кодируем имя пользователя и пароль в Base64
    //var encodedCredentials = btoa(username + ':' + password);

    var encodedCredentials = username + ':' + password;

    // Устанавливаем заголовок Authorization в запросе

    const httpOptions = {
    headers: new HttpHeaders({
			 'Access-Control-Allow-Origin': 'https://rieltorov.net',
       'Access-Control-Allow-Methods': 'GET',
       'Access-Control-Allow-Headers': 'Content-Type'
       })
      };

  	const config = {
		headers: {

		//  'Content-Type':  'application/json',
        //  'Authorization': 'Basic ' + btoa(unescape(encodeURIComponent('Администратор:By3dy9di')
        }
      };

    // Выполняем запрос с базовой авторизацией
   // var test = this.http.get('http://80.71.215.50:8099/Test/hs/AppServices/GetTests/1680/79aa76918db96b0bb880625bcfbea32da4ba51ca', config);

//console.log(test);

this.http.get('https://rieltorov.net/tmp/medicapi2.php',config)
//this.http.get('https://rieltorov.net/tmp/medicapi.php',config)

.subscribe(
        data => { // json data




        var dataj = JSON.parse(JSON.stringify(data));

           // console.log('Success: ', dataj["Data"]);

           console.log('Success: ', Object.keys(dataj).length);


           // если в 1с пользователь есть, то идем в фб

           if (Object.keys(dataj).length>0)
           {







           const auth = getAuth();
           signInWithEmailAndPassword(auth, this.loginForm.login + "@m.ru", this.loginForm.password).then((userCredential) => {

           // Signed in

           const user = userCredential.user;

           if (user) {
           // User is signed in, see docs for a list of available properties
           // https://firebase.google.com/docs/reference/js/firebase.User
           const uid = user.uid;

           // this.getMyLocation();

            console.log('Already reged!! / ' + uid);


            window.location.href = '/tabs/tab5/issledovaniya';




           }

           console.log(user);
           })
           .catch((error) => {

           const errorCode = error.code;
           const errorMessage = error.message;
          // this.isValid = true;

           //alert(errorMessage);

           console.log(errorMessage);

           createUserWithEmailAndPassword(auth, this.loginForm.login + "@m.ru", this.loginForm.password).then((userCredential) => {
           // Signed in

           const user = userCredential.user;

           const uid = user.uid;

           console.log('Reged!! / ' + uid);

           }).catch((error) => {
           const errorCode = error.code;
           const errorMessage = error.message;

           alert(errorMessage);

           });
















           });





















           }

           else{
               this.isValid = true;
           }







        },
        error => {
        this.isValid = true;
            console.log('Error: ', error);
        });







/*
   const auth = getAuth();
signInWithEmailAndPassword(auth, this.loginForm.login, this.loginForm.password)
  .then((userCredential) => {

 // this.isValid = false;
    // Signed in
    const user = userCredential.user;
    // ...

    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  //  this.isValid = true;

    //alert(errorMessage);
    console.log(errorMessage);
  });
*/



}

/*

    loginf() {


		  var tok = 'Администратор:By3dy9di';
              var hash = btoa(unescape(encodeURIComponent(tok)));


        $.ajax
          ({
            type: "GET",
            url: "http://80.71.215.50:8099/Test/hs/AppServices/GetTests/1680/79aa76918db96b0bb880625bcfbea32da4ba51ca",
            dataType: 'application/json',
            beforeSend: function (xhr){
                xhr.setRequestHeader("Authorization" , "Basic Администратор:By3dy9di");
            },
            success: function(){
              //  window.location.assign ="welcome.jsp";

			  console.log("ok");
            },
            error: function(data) {
                //var a = JSON.parse(data.responseText);
				console.log("Basic " + tok);
				console.log(data);
                //$("#login_msg").html("<p style='margin:3px'>" + a.message.text + "</p>");
            }
        });

     }

*/




}
