import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  isLoggedIn: any;

  constructor(private authService: AuthService, private router: Router){
     this.isLoggedIn = this.authService.checkToken()
  }

  onLogin(){
    this.router.navigateByUrl('login')
  }

  onLogout(){
      this.authService.logout();
      this.router.navigateByUrl('login')
  }

}
