import { Component } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';



@Component({
  selector: 'app-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})



export class DashboardComponent {
  items: NbMenuItem[] = [

    {
      title: 'Dashboard',
      icon: 'person-outline',
    },

    {
      title: 'Profile',
      icon: 'person-outline',
    },
    {
      title: 'Course',
      icon: 'lock-outline',
    },
    {
      title: 'Lesson',
      icon: { icon: 'checkmark-outline', pack: 'eva' },
    },
    {
      title: 'Inbox',
      icon: 'unlock-outline',
    },
  ];
}
