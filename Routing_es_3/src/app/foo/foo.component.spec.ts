import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooComponentComponent } from './foo.component';
import { Foo } from './foo.model';

describe('FooComponent', () => {
  let component: FooComponentComponent;
  let fixture: ComponentFixture<FooComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooComponentComponent]
    });
    fixture = TestBed.createComponent(FooComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
