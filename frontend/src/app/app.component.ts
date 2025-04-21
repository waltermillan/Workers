import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { GLOBAL } from './configuration/configuration.global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = '';
  year: string = '';
  footerMsgRights: string = '';
  userName: string | null = '';
  userRole: string | null = '';
  isAdmin: boolean = false;

  constructor(private router: Router, public authService: AuthService) {
    this.title = GLOBAL.appName;
    this.year = GLOBAL.currentYear;
    this.footerMsgRights = GLOBAL.appLegalName.replace('__YEAR__', this.year);
  }

  ngOnInit(): void {
    this.authService.userName$.subscribe((name) => {
      this.userName = name;
    });

    this.authService.userRole$.subscribe((role) => {
      this.userRole = role;

      if (role) {
        this.isAdmin = role.toLowerCase() === GLOBAL.adminRole.toLowerCase();
      }
    });
  }

  logout() {
    this.authService.logout();
  }

  redirect() {
    this.router.navigate(['/app-Info']);
  }

  openDocument() {
    const documentUrl = '/assets/docs/UserManual.pdf';
    const newTab = window.open(documentUrl, '_blank');

    if (!newTab) {
      alert(
        "The document couldn't be opened. Please check that your browser allows new tabs to be opened."
      );
    }
  }
}
