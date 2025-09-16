import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private isCollapsedSubject = new BehaviorSubject<boolean>(false);
  isCollapsed$ = this.isCollapsedSubject.asObservable();

  toggleMenu() {
    this.isCollapsedSubject.next(!this.isCollapsedSubject.value);
  }

  setCollapsed(collapsed: boolean) {
    this.isCollapsedSubject.next(collapsed);
  }

  get isCollapsed(): boolean {
    return this.isCollapsedSubject.value;
  }
}
