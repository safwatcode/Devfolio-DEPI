import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  username: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';
  contact(): void {
    if (this.username == '') {
      console.log('No username provided.');
    } else {
      console.log('Message: ' + this.username);
    }
    if (this.email == '') {
      console.log('No email provided.');
    } else {
      console.log('Message: ' + this.email);
    }
    if (this.subject == '') {
      console.log('No subject provided.');
    } else {
      console.log('Subject: ' + this.subject);
    }
    if (this.message == '') {
      console.log('No message provided.');
    } else {
      console.log('Message: ' + this.message);
    }
  }
}
