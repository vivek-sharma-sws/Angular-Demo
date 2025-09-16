import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-left-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './left-menu.component.html',
  styleUrl: './left-menu.component.css'
})
export class LeftMenuComponent {
  isMenuCollapsed = false;

  constructor(private menuService: MenuService) {
    this.menuService.isCollapsed$.subscribe(collapsed => {
      this.isMenuCollapsed = collapsed;
    });
  }
  
  menuItems = [
    {
      icon: '🏠',
      label: 'Home',
      route: '/home',
      active: true
    },
    {
      icon: '📊',
      label: 'Dashboard',
      route: '/dashboard',
      active: false
    },
    {
      icon: '👤',
      label: 'Profile',
      route: '/profile',
      active: false
    },
    {
      icon: '⚙️',
      label: 'Settings',
      route: '/settings',
      active: false
    },
    {
      icon: '📈',
      label: 'Analytics',
      route: '/analytics',
      active: false
    },
    {
      icon: '💬',
      label: 'Messages',
      route: '/messages',
      active: false
    },
    {
      icon: '🔔',
      label: 'Notifications',
      route: '/notifications',
      active: false
    }
  ];

  toggleMenu() {
    this.menuService.toggleMenu();
  }

  setActiveItem(index: number) {
    this.menuItems.forEach((item, i) => {
      item.active = i === index;
    });
  }
}
