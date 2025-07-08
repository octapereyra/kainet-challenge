import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/shared/navbar/navbar';
import { SidebarComponent } from './components/shared/sidebar/sidebar';
import { FooterComponent } from './components/shared/footer/footer';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, SidebarComponent, RouterOutlet, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'kainet-challenge';

  protected showSidebar = true;

  toggleSidebar(showSidebar: boolean) {
    console.log('Toggling sidebar:', showSidebar);
    this.showSidebar = !showSidebar;
  }
}
