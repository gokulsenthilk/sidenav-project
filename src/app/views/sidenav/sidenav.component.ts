import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScrollService } from 'src/app/config/sidenav-scroller.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  @Input() menuSidebar: any;
  @Output() showSubmenuEvent: EventEmitter<HTMLElement> = new EventEmitter();

  constructor(private scrollService: ScrollService) {}
  showSubmenu(itemEl: HTMLElement) {
    this.showSubmenuEvent.emit(itemEl);
  }

  scrollToId(id: string) {
    console.log('element id : ', id);
    this.scrollService.scrollToElementById(id);
  }

  scrollToElement(element: HTMLElement) {
    this.scrollService.scrollToElement(element);
  }
}
