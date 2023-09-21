import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

    textMessage = ''
    alertClass = ''


  constructor(private authService: AuthService){

  }

  userModel = new User()

  onSubmitHandler(){
    //console.log(data)
    //console.log(this.userModel)
    this.authService.register(this.userModel)
    .subscribe((response: any) => {
      console.log(response)
      this.alertClass = 'alert alert-success'
      this.textMessage = response.message
    }, (error) => {
      console.log(error)
      this.alertClass = 'alert alert-danger'
      this.textMessage = error.error.message
    })
  }

}
