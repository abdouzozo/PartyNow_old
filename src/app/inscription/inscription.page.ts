import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import {User } from "../class/user" ;

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  utilisateur_courant : User;


  constructor(public http: HttpClient, public router: Router) {
    this.readAPI('http://localhost:8080/api/utilisateur/abdouzozo@gmail.com').subscribe((data) => {
      console.log(data);
    });
    this.utilisateur_courant = new User();

  }

  readAPI(URL: string){
    return this.http.get(URL);
  }

  ngOnInit() {
  }

}
