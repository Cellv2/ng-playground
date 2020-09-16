import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonPlaceholderTestComponent } from './json-placeholder-test.component';

describe('JsonPlaceholderTestComponent', () => {
  let component: JsonPlaceholderTestComponent;
  let fixture: ComponentFixture<JsonPlaceholderTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonPlaceholderTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonPlaceholderTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
