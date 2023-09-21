import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  textMessage = ''
  alertClass = ''

  // loginForm = new FormGroup({
  //   email: new FormControl(),
  //   password: new FormControl()
  // })

  constructor(
    private fb: FormBuilder, 
    public authService: AuthService, 
    public router: Router) {
  }

  loginForm = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.minLength(6)]]
  })

  get email() {
    return this.loginForm.get('email')
  }

  get password() {
    return this.loginForm.get('password')
  }

  loginHandler(){
    //console.log(this.loginForm.value)
    this.authService.login(this.loginForm.value).subscribe((response: any) => {
        this.textMessage = 'login successfully';
        this.alertClass = 'alert alert-success';

        localStorage.setItem('token', response.token)
        localStorage.setItem('user', JSON.stringify(response.user))

        this.router.navigateByUrl('/')
    }, (error) => {
      this.textMessage = error.error.message,
      this.alertClass = 'alert alert-danger'
    })
  }

}
