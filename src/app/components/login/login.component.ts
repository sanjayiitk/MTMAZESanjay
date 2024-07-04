import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],/* for reactive form  */
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formValue: any;

  LoginForm: FormGroup = new FormGroup({
  username: new FormControl("",[Validators.required,Validators.email]),
  pwd: new FormControl("",[Validators.required,Validators.minLength(8)])
  });

  onLogin(){
this.formValue=this.LoginForm.value;
  };

}
