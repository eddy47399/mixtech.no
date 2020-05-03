import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlexPageComponent } from './plex-page.component';

describe('PlexPageComponent', () => {
  let component: PlexPageComponent;
  let fixture: ComponentFixture<PlexPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlexPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlexPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
