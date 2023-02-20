import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];
  user$: Observable<any>;

  constructor(private auth: AuthenticationService, private router: Router) {}

  ngOnInit(): void {
    this.user$ = this.auth.currentUser$;
    this.items = [
      {
        label: 'Options',
        items: [
          {
            label: 'Logout',
            icon: 'pi pi-sign-out',
            command: () => {
              this.signOut();
            },
          },
        ],
      },
    ];
  }

  signOut() {
    this.auth.logout().subscribe(() => {
      this.router.navigate(['/sign-in']);
    });
  }
}
