import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopbarComponent } from "./components/topbar/topbar.component";
import { HeroComponent } from "./components/hero/hero.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopbarComponent, HeroComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `

  `,
})
export class AppComponent implements AfterViewInit {
  title = 'Portfolio';
  // Get current year
  currentYear: number = new Date().getFullYear();

  @ViewChildren('tabBtn') tabBtns!: QueryList<ElementRef>;
  @ViewChildren('tabContent') tabContents!: QueryList<ElementRef>;

  lastActiveTab!: HTMLElement;
  lastActiveTabBtn!: HTMLElement;

  ngAfterViewInit(): void {
    // Set the initial active tab and button
    this.lastActiveTab = this.tabContents.first.nativeElement;
    this.lastActiveTabBtn = this.tabBtns.first.nativeElement;

    // Add event listeners to the tab buttons
    this.tabBtns.forEach((btn) => {
      btn.nativeElement.addEventListener('click', () =>
        this.onTabClick(btn.nativeElement)
      );
    });
  }

  onTabClick(tabBtn: HTMLElement): void {
    // Remove 'active' class from the last active tab and button
    this.lastActiveTab.classList.remove('active');
    this.lastActiveTabBtn.classList.remove('active');

    // Find the corresponding tab content using getAttribute to access the custom attribute
    const tabContent = this.tabContents.find(
      (content) =>
        content.nativeElement.getAttribute('data-tab-content') ===
        tabBtn.getAttribute('data-tab-btn')
    )?.nativeElement;

    // Add 'active' class to the clicked tab and button
    tabContent?.classList.add('active');
    tabBtn.classList.add('active');

    // Update the active references
    this.lastActiveTab = tabContent!;
    this.lastActiveTabBtn = tabBtn;
  }
}
