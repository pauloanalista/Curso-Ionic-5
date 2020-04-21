import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TexttospeechPage } from './texttospeech.page';

describe('TexttospeechPage', () => {
  let component: TexttospeechPage;
  let fixture: ComponentFixture<TexttospeechPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TexttospeechPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TexttospeechPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
