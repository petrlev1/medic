import { Component, OnInit } from '@angular/core';

import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

import { getDatabase, ref, set } from "firebase/database";

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

  constructor() {

  // tabs/tab5/zakazat-test


   const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;

    console.log('Reged!!');
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
  }

  SignIn(){


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

}






}
