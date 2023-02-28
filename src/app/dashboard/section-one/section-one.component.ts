import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss'],
})
export class SectionOneComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    console.log(this.userService.getProfileInformation());
  }
}
