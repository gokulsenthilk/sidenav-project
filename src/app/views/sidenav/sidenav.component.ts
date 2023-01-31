import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  @Input() menuSidebar: any;
  @Output() showSubmenuEvent: EventEmitter<HTMLElement> = new EventEmitter();

  constructor(private route: Router) {}
  showSubmenu(itemEl: HTMLElement) {
    this.showSubmenuEvent.emit(itemEl);
  }

  gotoSection(section: string) {
    console.log(section);
    // this.route.navigate(['home', section]);
    this.route.navigate(['home', section]);
  }
}
