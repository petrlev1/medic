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


loginForm: any = {
  login: '',
  password: '',
}

  constructor(private router: Router,private http: HttpClient) {



  // tabs/tab5/zakazat-test


   const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;

    console.log('Reged!! / ' + uid);

    this.router.navigate(['/tabs/tab1'])

    //this.html_form = 0;
    //this.ProfName = "Privet " + uid + " !";
  //  this.ProfName = "Добро пожаловать!";



  } else {
    // User is signed out

   console.log('not reged');
//   this.html_form = 1;

  }
});


  }

  ngOnInit() {
	 // this.loginf();



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


this.http.get('http://80.71.215.50:8099/Test/hs/AppServices/GetTests/1680/79aa76918db96b0bb880625bcfbea32da4ba51ca',config)
	
.subscribe(
        data => { // json data
            console.log('Success: ', data);
        },
        error => {
            console.log('Error: ', error);
        });


  }

  SignIn(){

	  console.log(this.loginForm.login + "," + this.loginForm.password);

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



    loginf() {


		  var tok = 'Администратор:By3dy9di';
              var hash = btoa(unescape(encodeURIComponent(tok)));
             


     

        // IMPORTANT, you should move request logic to repositores, 
        // controller should only do stuff like:
        // authService.login(vm.username, vm.password).then(...)

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






}
