import { Component, OnInit } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Subscription } from 'rxjs';
import { AuthenticationService } from './services/authentication.service';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Finances-project';
  subscription: Subscription;

  showHeader = false;

  constructor(private auth: AuthenticationService) {}

  ngOnInit(): void {
    this.auth.currentUser$.subscribe(() => {
      this.showHeader = true;
    });
  }
}
