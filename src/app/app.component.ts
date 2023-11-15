import { Component } from '@angular/core';
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import {Router} from "@angular/router"
//import { login } from 'login';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {

  //rootPage:any = 'login';

  constructor(private router: Router) {
  }


  SignOut(){






const auth = getAuth();

   auth.signOut().then(function() {
    console.log('Signed Out');
   // window.location.reload();

   window.location.href = '/login';

  // this.router.navigate(['/login']);

    },
    function(error) {
    console.error('Sign Out Error', error);
  });

}

}
