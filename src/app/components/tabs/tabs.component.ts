import { RouterLink, RouterLinkActive } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  // templateUrl: './tabs.component.html',
  // styleUrl: './tabs.component.css'
  template: `
    <div class="primary-tabs">
      <a
        routerLink="projects"
        routerLinkActive="active"
        class="tab-btn active"
        data-tab-btn="project"
      >
        <span class="tab-text title-small">Projects</span>
        <div class="state-layer"></div>
      </a>

      <a
        routerLink="resume"
        routerLinkActive="active"
        class="tab-btn"
        data-tab-btn="resume"
      >
        <span class="tab-text title-small">Skills</span>
        <div class="state-layer"></div>
      </a>

      <a
        routerLink="contact"
        routerLinkActive="active"
        class="tab-btn"
        data-tab-btn="contact"
      >
        <span class="tab-text title-small">Contact</span>
        <div class="state-layer"></div>
      </a>
    </div>
  `,
})
export class TabsComponent {}
