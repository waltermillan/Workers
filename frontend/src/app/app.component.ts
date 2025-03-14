import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Workers\' registry Co.';
  year:number = new Date().getFullYear();
  footerMsgRights: string = 'All rights reserved.';

  constructor(private router: Router,
              public authService:AuthService
   ){

  }

  logout(){
    this.authService.loggedIn = false;
  }

  redirect(){
    this.router.navigate(['/app-Info']);
  }
}
