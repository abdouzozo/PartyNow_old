import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  constructor(private http: HttpClient) {
    this.readAPI('http://localhost:8080/api/utilisateur')
        .subscribe((data) => {
          console.log(data);
        });
  }

  readAPI(URL: string) {
    return this.http.get(URL);
  }

  ngOnInit() {
  }

}
