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
  selector: 'app-zapisi-detail',
  templateUrl: './zapisi-detail.page.html',
  styleUrls: ['./zapisi-detail.page.scss'],
})
export class ZapisiDetailPage implements OnInit {

id: string;
doctor: string;
time: string;
date: string;
cancel: number;
  
  constructor(private route: ActivatedRoute) {
	  
	    this.id = "";
	  this.doctor = "";
	  this.time = "";
	  this.date = "";
	  this.cancel = 0;
  
  
  }

  ngOnInit() {

	  this.route.queryParams.subscribe(
      params => {
        this.id =  params['id'];
		this.doctor = params['doctor'];
		this.date = params['date'];
		this.time = params['time'];
		//this.cancel = params['cancel'];

		if (params['cancel']==1)
		{
			console.log("go api");
		}


		//console.log(this.cancel);


  });

}
  }
