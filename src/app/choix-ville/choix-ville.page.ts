import { Component, OnInit, NgZone } from '@angular/core';
import { Storage } from '@ionic/storage';


declare var google;
const STORAGE_KEY_VILLE_CHOISIE = 'villeChoisie';

@Component({
  selector: 'app-choix-ville',
  templateUrl: './choix-ville.page.html',
  styleUrls: ['./choix-ville.page.scss'],
})
export class ChoixVillePage implements OnInit {
  private GoogleAutocomplete: any;
  private autocomplete: { input: string };
  private autocompleteItems: any[];
  //private zone: any;

  map: any;
  address:string;
  lat: string;
  long: string;
  location: any;
  placeid: any;
  villeChoisie : any;


  constructor(public zone: NgZone, private storage: Storage){
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete = { input: '' };
    this.autocompleteItems = [];

  }

  updateSearchResults(){
    if (this.autocomplete.input == '') {
      this.autocompleteItems = [];
      return;
    }
    this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input },
        (predictions, status) => {
          this.autocompleteItems = [];
          this.zone.run(() => {
            predictions.forEach((prediction) => {
              this.autocompleteItems.push(prediction);
            });
          });
        });
  }

  SelectCity(item) {
    ///WE CAN CONFIGURE MORE COMPLEX FUNCTIONS SUCH AS UPLOAD DATA TO FIRESTORE OR LINK IT TO SOMETHING
    this.villeChoisie = item;
    this.placeid = item.place_id;
    this.storage.set(STORAGE_KEY_VILLE_CHOISIE, item);
   /* this.storage.get(STORAGE_KEY_VILLE_CHOISIE).then( (val) =>{
      console.log("ville choisie est " + val)
    })*/
  }

  SelectSearchResult(item) {
    ///WE CAN CONFIGURE MORE COMPLEX FUNCTIONS SUCH AS UPLOAD DATA TO FIRESTORE OR LINK IT TO SOMETHING
    alert(JSON.stringify(item))
    this.placeid = item.place_id
  }

  ngOnInit() {
  }

  ClearAutocomplete(){
    this.autocompleteItems = [];
    this.autocomplete.input = '';
  }
}