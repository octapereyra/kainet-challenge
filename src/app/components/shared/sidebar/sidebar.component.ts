import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [NgClass, RouterLink, RouterLinkActive],
})
export class SidebarComponent {
  menuItems = [
    {
      label: 'Inicio',
      icon: 'bi bi-house',
      link: '',
    },
    {
      label: 'Listado de Posiciones',
      icon: 'bi bi-list',
      link: 'listPositions',
    },
    {
      label: 'Crear Posición',
      icon: 'bi bi-plus',
      link: 'createPosition',
    },
  ];

  showSidebar = input.required<boolean>();
  closeSidebar = output<boolean>();
  hideSidebar() {
    this.closeSidebar.emit(false);
  }
}
