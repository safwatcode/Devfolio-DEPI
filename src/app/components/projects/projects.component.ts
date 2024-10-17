import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  imports: [CommonModule], // Import CommonModule to use NgFor, NgIf, etc.
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Pixstock - Stock Media App',
      subtitle: 'Web App',
      image: 'images/project-1.png',
    },
    {
      title: 'Cook.io - Recipe App',
      subtitle: 'Web App',
      image: 'images/project-2.png',
    },
    {
      title: 'GitFinder - Github User Finder',
      subtitle: 'Web App',
      imageUrl: 'images/project-3.png',
    },
    {
      title: 'Weatherio - Live Weather App',
      subtitle: 'Web App',
      imageUrl: 'images/project-4.png',
    },
    {
      title: 'Tvflix - Netflix Clone 2.0',
      subtitle: 'Web App',
      imageUrl: 'images/project-5.png',
    },
    {
      title: 'Travelia - Travel Website',
      subtitle: 'Web App',
      imageUrl: 'images/project-6.png',
    },
  ];
}
