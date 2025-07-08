import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css'],
  imports: [NgClass, RouterLink, RouterLinkActive],
})
export class SidebarComponent {
  showSidebar = input.required<boolean>();

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
}
