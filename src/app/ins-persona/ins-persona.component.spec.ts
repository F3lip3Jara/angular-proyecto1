import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsPersonaComponent } from './ins-persona.component';

describe('InsPersonaComponent', () => {
  let component: InsPersonaComponent;
  let fixture: ComponentFixture<InsPersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsPersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
