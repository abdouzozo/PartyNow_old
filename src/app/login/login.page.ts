import { Component, OnInit } from '@angular/core';
import {User} from "../class/user";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userCourantEmail: '';
  userCourantPassword: '';

  userBdd= {
    email: '',
    password: ''
  };

  constructor(public http: HttpClient, public router: Router) {
    this.readAPI('http://localhost:8080/api/utilisateur/abdouzozo@gmail.com').subscribe((data) => {
      console.log(data['tel']);
    });


  }

  readAPI(URL: string){
    return this.http.get(URL);
  }

  connexion(){
    this.readAPI('http://localhost:8080/api/utilisateur/'+this.userCourantEmail).subscribe((userBdd) => {
      this.userBdd.email = userBdd['email'];
      this.userBdd.password = userBdd['password'];

    });
    console.log('print mail and password userCourant ' + this.userCourantEmail + '  ' + this.userCourantPassword);
    if(this.userCourantEmail == this.userBdd.email && this.userCourantPassword == this.userBdd.password){
      this.router.navigate(['/accueil'])
    }

  }

  ngOnInit() {
  }

}
