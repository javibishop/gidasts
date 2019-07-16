import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistenciasManagerComponent } from './asistencias-manager.component';

describe('AsistenciasManagerComponent', () => {
  let component: AsistenciasManagerComponent;
  let fixture: ComponentFixture<AsistenciasManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsistenciasManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsistenciasManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
