import { Component, OnInit } from '@angular/core';
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref,  query, orderByChild, equalTo, limitToLast, set, update, child, onValue  } from "firebase/database";

import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-issledovaniya',
  templateUrl: './issledovaniya.page.html',
  styleUrls: ['./issledovaniya.page.scss'],
})
export class IssledovaniyaPage implements OnInit {


public isHidden: boolean = true;


test: number;



 //profs: Array<{sovp: number; imya: string; img: string; rot: string; distm: string;}> = [];

 profs: Array<{type: string; date: string; result: string; diffdays: number;}> = [];


  constructor(private loadingCtrl: LoadingController) {

  this.test = 0;

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

  ngOnInit() {



let dict = new Map<string, string>();

dict.set("cd4", "СД4");
dict.set("pcr", "ПЦР");

console.log(dict.get('cd4'));

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

 //console.log(data);
 // updateStarCount(postElement, data);
});


onValue(ref(db, '/users/' + uid), (poisk) => {


    let res = query(ref(db, '/users/' + uid + '/tests'));

/*
	if (poisk.val().who!="any") { // posik - запрос самого пользователя

		this.sovpWho = 48;

		res = query(ref(db, '/users'),orderByChild("kto"),equalTo(poisk.val().who));
	}

*/



    onValue(res, (snapshot) => {




	    snapshot.forEach((childSnapshot) =>
		{
			const childKey = childSnapshot.key;



            const childData = childSnapshot.val();

           // console.log(childData);


            // profs: Array<{type: string; date: string; result: string;}> = [];



//console.log(this.profs[this.profs.length-2]?.date.split(".", 3)[1] + "/" + this.profs[this.profs.length-2]?.date.split(".", 3)[0] + "/" + this.profs[this.profs.length-2]?.date.split(".", 3)[2] + "-" + childSnapshot.val().date.split(".", 3)[1] + "/" + childSnapshot.val().date.split(".", 3)[0] + "/" + childSnapshot.val().date.split(".", 3)[2] + "=" +this.getDiffDays(new Date(this.profs[this.profs.length-2]?.date.split(".", 3)[1] + "/" + this.profs[this.profs.length-2]?.date.split(".", 3)[0] + "/" + this.profs[this.profs.length-2]?.date.split(".", 3)[2]), new Date(childSnapshot.val().date.split(".", 3)[1] + "/" + childSnapshot.val().date.split(".", 3)[0] + "/" + childSnapshot.val().date.split(".", 3)[2])));


this.test = this.getDiffDays(new Date(this.profs[this.profs.length-1]?.date.split(".", 3)[1] + "/" + this.profs[this.profs.length-1]?.date.split(".", 3)[0] + "/" + this.profs[this.profs.length-1]?.date.split(".", 3)[2]), new Date(childSnapshot.val().date.split(".", 3)[1] + "/" + childSnapshot.val().date.split(".", 3)[0] + "/" + childSnapshot.val().date.split(".", 3)[2]));


if (!this.test) this.test = 0;

            	this.profs.push({type: dict.get(childSnapshot.val().type) as string, date: childSnapshot.val().date,result: childSnapshot.val().result, diffdays: this.test});

//if (this.profs[this.profs.length]?.date)




// Let's test it
//console.log(formattedObj);



            let so_ob = 0;

            let im = "/assets/images/photoEmpt.png";


		//	if (childSnapshot.val().orie === poisk.val().orie) so_ori = 15;


		//	if (childSnapshot.val().image) im = childSnapshot.val().image;

	//		this.profs.push({sovp: totalS, imya:childSnapshot.val().imya,img:im, rot: childKey + "", distm: this.distm});












        });




	  // console.log(this.profs);

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


}


}
