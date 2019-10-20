import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { RegisterTaskComponent } from './register-task.component';
import { ProgressBarComponent } from '../../../shared';

describe('RegisterTaskComponent', () => {
  let component: RegisterTaskComponent;
  let fixture: ComponentFixture<RegisterTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        RegisterTaskComponent,
        ProgressBarComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('form invalid when is empty', () => {
  //   fixture.detectChanges();
  //   expect(component.formTask.valid).toBeFalsy();
  // });

  /*
  it('Change date to pt-br format', () => {
    console.log('>>>>>>')
    console.log(component.formTask.form)
    console.log(component.task)
    const today = new Date().toLocaleDateString('pt-br');
    expect(component.task.deliveryDate).toEqual(today);
    // component.task.deliveryDate = new Date('1/10/2019').toLocaleDateString('pt-br');
    // Update the title input
    // fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="deliveryDate"]')).nativeElement;
    inputElement.value = '10/1/2019';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    console.log(inputElement.value)
    expect(inputElement.value).toEqual('10/1/2019');
    

    // const compiled = fixture.debugElement.nativeElement;
    // console.log(compiled.querySelector('.deliveryDate'))
    // expect(compiled.querySelector('.name').textContent).toContain('test #1');
  })
  */

});
