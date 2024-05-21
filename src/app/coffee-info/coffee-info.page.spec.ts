import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CoffeeInfoPage } from './coffee-info.page';

describe('CoffeeInfoPage', () => {
  let component: CoffeeInfoPage;
  let fixture: ComponentFixture<CoffeeInfoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoffeeInfoPage],
    }).compileComponents();

    fixture = TestBed.createComponent(CoffeeInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

