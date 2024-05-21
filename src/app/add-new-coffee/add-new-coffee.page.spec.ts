import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AddNewCoffeePage } from './add-new-coffee.page';

describe('AddNewCoffeePage', () => {
  let component: AddNewCoffeePage;
  let fixture: ComponentFixture<AddNewCoffeePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddNewCoffeePage],
    }).compileComponents();

    fixture = TestBed.createComponent(AddNewCoffeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

