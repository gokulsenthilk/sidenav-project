import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  openSidebar: boolean = true;

  menuSidebar = [
    {
      link_name: 'Dashboard',
      link: '/dashboard',
      icon: 'home',
      sub_menu: [],
    },
    {
      link_name: 'Category',
      link: null,
      icon: 'view_module',
      sub_menu: [
        {
          link_name: 'HTML & CSS',
          link: '/html-n-css',
        },
        {
          link_name: 'JavaScript',
          link: '/javascript',
        },
        {
          link_name: 'PHP & MySQL',
          link: '/php-n-mysql',
        },
      ],
    },
    {
      link_name: 'Posts',
      link: null,
      icon: 'vertical_split',
      sub_menu: [
        {
          link_name: 'Web Design',
          link: '/posts/web-design',
        },
        {
          link_name: 'Login Form',
          link: '/posts/login-form',
        },
        {
          link_name: 'Card Design',
          link: '/posts/card-design',
        },
      ],
    },
    {
      link_name: 'Analytics',
      link: '/analytics',
      icon: 'view_module',
      sub_menu: [],
    },
    {
      link_name: 'Chart',
      link: '/chart',
      icon: 'view_module',
      sub_menu: [],
    },
    {
      link_name: 'Plugins',
      link: null,
      icon: 'view_module',
      sub_menu: [
        {
          link_name: 'UI Face',
          link: '/ui-face',
        },
        {
          link_name: 'Pigments',
          link: '/pigments',
        },
        {
          link_name: 'Box Icons',
          link: '/box-icons',
        },
      ],
    },
    {
      link_name: 'Explore',
      link: '/explore',
      icon: 'view_module',
      sub_menu: [],
    },
    {
      link_name: 'History',
      link: '/history',
      icon: 'view_module',
      sub_menu: [],
    },
    {
      link_name: 'Setting',
      link: '/setting',
      icon: 'view_module',
      sub_menu: [],
    },
  ];

  constructor() {}

  ngOnInit() {}

  showSubmenu(itemEl: HTMLElement) {
    itemEl.classList.toggle('showMenu');
  }
}
