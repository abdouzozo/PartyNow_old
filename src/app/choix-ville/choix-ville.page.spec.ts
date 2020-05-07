import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChoixVillePage } from './choix-ville.page';

describe('ChoixVillePage', () => {
  let component: ChoixVillePage;
  let fixture: ComponentFixture<ChoixVillePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoixVillePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChoixVillePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
