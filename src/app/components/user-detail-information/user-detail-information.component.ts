import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-detail-information',
  templateUrl: './user-detail-information.component.html',
  styleUrls: ['./user-detail-information.component.css'],
})
export class UserDetailInformationComponent {
  @Input() username: string | undefined;
  @Input() email: string | undefined;
  @Input() city: string | undefined;
  @Input() street: string | undefined;
  @Input() suite: string | undefined;
  @Input() phone: string | undefined;
  @Input() website: string | undefined;
  @Input() companyName: string | undefined;
  @Input() catchPhrase: string | undefined;
  @Input() bs: string | undefined;
}
