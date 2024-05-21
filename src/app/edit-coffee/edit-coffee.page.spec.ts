import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { EditCoffeePage } from './edit-coffee.page';

describe('EditCoffeePage', () => {
  let component: EditCoffeePage;
  let fixture: ComponentFixture<EditCoffeePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [EditCoffeePage],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(EditCoffeePage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

