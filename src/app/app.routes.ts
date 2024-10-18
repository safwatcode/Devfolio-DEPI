import { Routes } from '@angular/router';
import { ProjectsComponent } from './components/projects/projects.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'projects', // Redirect the base URL to the 'projects' route
    pathMatch: 'full', // Ensures it only redirects when the full path is empty
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'resume',
    component: ResumeComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
];
