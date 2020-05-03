import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VpnPageComponent } from './vpn-page.component';

describe('VpnPageComponent', () => {
  let component: VpnPageComponent;
  let fixture: ComponentFixture<VpnPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VpnPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VpnPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
