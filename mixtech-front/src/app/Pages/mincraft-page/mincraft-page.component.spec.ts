import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MincraftPageComponent } from './mincraft-page.component';

describe('MincraftPageComponent', () => {
  let component: MincraftPageComponent;
  let fixture: ComponentFixture<MincraftPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MincraftPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MincraftPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
