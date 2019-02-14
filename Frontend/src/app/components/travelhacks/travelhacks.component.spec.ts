import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelhacksComponent } from './travelhacks.component';

describe('TravelhacksComponent', () => {
  let component: TravelhacksComponent;
  let fixture: ComponentFixture<TravelhacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelhacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelhacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
