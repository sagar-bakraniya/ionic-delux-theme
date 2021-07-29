import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  pages = [
    { page: 'Categories', icon: 'list-outline' , url: '/profile'},
    { page: 'Profile', icon: 'person-outline', url: '/profile' },
    { page: 'Notifications', icon: 'notifications-outline' , url: '/profile'},
  ];
  constructor() {}
}
