import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-transaction',
  templateUrl: './edit-transaction.component.html',
  styleUrls: ['./edit-transaction.component.css'],
})
export class EditTransactionComponent {
  id!: number;

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
  }
}
