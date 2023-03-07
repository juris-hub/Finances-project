import { Component, OnInit } from '@angular/core';
import { from, Observable, Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss'],
})
export class SectionOneComponent implements OnInit {
  userInfo$: Observable<any>;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userInfo$ = from(this.userService.getUserInfo());
  }
}
