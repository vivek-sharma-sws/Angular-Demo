import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { MenuService } from './services/menu.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LeftMenuComponent, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-setup');
  isMenuCollapsed = false;

  constructor(private menuService: MenuService) {
    this.menuService.isCollapsed$.subscribe(collapsed => {
      this.isMenuCollapsed = collapsed;
    });
  }
}
