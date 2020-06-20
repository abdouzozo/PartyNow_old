
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import {User} from "../class/user";
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  newUserFName: '';
  newUserLName: '';
  newUserEmail: '';
  newUserPassword: '';

  newUser: User



  constructor(public apiService: ApiService, public http: HttpClient, public router: Router) {

    this.newUser = new User();
  }



  readAPI(URL: string){
    return this.http.get(URL);
  }

  addNewUser(){
    this.apiService.createItem(this.newUser).subscribe((response) => {
      this.router.navigate(['/choix-ville']);
    });
  }

  ngOnInit() {
  }

}
