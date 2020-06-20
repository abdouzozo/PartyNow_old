import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChercherSoireePage } from './chercher-soiree.page';

describe('ChercherSoireePage', () => {
  let component: ChercherSoireePage;
  let fixture: ComponentFixture<ChercherSoireePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChercherSoireePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChercherSoireePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
