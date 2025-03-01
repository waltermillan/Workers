import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Para redirigir a otro componente
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Workers & Registers Co';
  year:number = new Date().getFullYear();
  footerMsgRights: string = 'All rights reserved.';

  constructor(private router: Router,
              public authService:AuthService
   ){

  }

  redirect(value:number){
    switch (value) 
    {
      case 1:
        this.router.navigate(['/login']);
        break;
      case 2:
        this.router.navigate(['/new-worker']);
        break;
      case 3:
        this.router.navigate(['/update-worker']);
        break;
      case 4:
        this.router.navigate(['/delete-worker']);
        break;
      default:
        this.router.navigate(['/login']);
        break;
    }
  }

  logout(){
    this.authService.loggedIn = false;
  }
}
