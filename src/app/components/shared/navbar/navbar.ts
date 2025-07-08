import { Component, output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class NavbarComponent {
  protected title = 'Kainet Challenge';
  protected sidebar = false;

  showSidebar = output<boolean>();

  toggleSidebar() {
    this.showSidebar.emit(!this.sidebar);
    this.sidebar = !this.sidebar;
  }
}
