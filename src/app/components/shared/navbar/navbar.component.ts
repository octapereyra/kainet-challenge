import { Component, output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
    `
      .navbar-brand {
        font-weight: bold;
      }
    `,
  ],
})
export class NavbarComponent {
  protected sidebarOpen = false;

  showSidebar = output<boolean>();

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
    this.showSidebar.emit(!this.sidebarOpen);
  }
}
