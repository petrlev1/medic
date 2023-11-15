import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3wqDxm-jJPnFM0n98ncETGXYZs-YWmK8",
  authDomain: "medic-fc8ac.firebaseapp.com",
  projectId: "medic-fc8ac",
  storageBucket: "medic-fc8ac.appspot.com",
  messagingSenderId: "152928306196",
  appId: "1:152928306196:web:aebe15be6d5542ab251301"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
