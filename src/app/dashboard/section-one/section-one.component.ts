import { Component, OnInit } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss'],
})
export class SectionOneComponent implements OnInit {
  userDataSubscription: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    from(this.userService.getProfileInformation()).subscribe(console.log);
  }
}
