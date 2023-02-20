import { Component, OnInit } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Subscription } from 'rxjs';
import { AuthenticationService } from './services/authentication.service';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Finances-project';
  isAuthenticated = false;
  subscription: Subscription;

  constructor(private auth: AuthenticationService) {}

  ngOnInit(): void {
    this.subscription = this.auth.isLoggedIn$.subscribe(() => {
      console.log('logged in');
      this.isAuthenticated = true;
    });
  }
}
