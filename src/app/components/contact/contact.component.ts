import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  // templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  template: `
    <section class="section contact-tab" data-tab-content="contact">
      <div class="container">
        <div class="contact-info">
          <h4 class="section-title title-sm">Contact Info</h4>
          <ul class="contact-info-list">
            <li class="contact-info-item">
              <div class="icon-box">
                <span class="material-symbols-outlined" aria-hidden="true">
                  mail
                </span>
              </div>
              <div class="info-content">
                <p class="label-sm info-title">Mail</p>
                <a href="mailto:john.doe@dev.com" class="label-sm info-text">
                  john.doe&#64;dev.com
                </a>
              </div>
            </li>
            <li class="contact-info-item">
              <div class="icon-box">
                <span class="material-symbols-outlined" aria-hidden="true">
                  call
                </span>
              </div>
              <div class="info-content">
                <p class="label-sm info-title">Contact</p>
                <a href="tel:+201125285475" class="label-sm info-text">
                  +201125285475
                </a>
              </div>
            </li>
            <li class="contact-info-item">
              <div class="icon-box">
                <span class="material-symbols-outlined" aria-hidden="true">
                  location_on
                </span>
              </div>
              <div class="info-content">
                <p class="label-sm info-title">Address</p>
                <span class="label-sm info-text"> Cairo, Egypt </span>
              </div>
            </li>
          </ul>

          <h4 class="title-sm">Social Info</h4>
          <div class="social-list">
            <a
              href="https://www.facebook.com"
              target="_blank"
              class="social-item"
            >
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              class="social-item"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.x.com" target="_blank" class="social-item">
              <i class="fa-brands fa-x-twitter"></i>
            </a>
            <a
              href="https://www.github.com"
              target="_blank"
              class="social-item"
            >
              <i class="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              class="social-item"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>

        <div class="contact-form">
          <h3 class="title-lg">Let's Work Together</h3>
          <form
            class="input-wrapper"
            method="post"
            #ContactForm="ngForm"
            (ngSubmit)="contact()"
          >
            <input
              type="text"
              name="username"
              placeholder="Name*"
              required
              class="input-field"
              [(ngModel)]="username"
              #username="ngModel"
            />

            @if(username.invalid && (username.dirty || username.touched)) {
            <div class="form-invalid">Name is required</div>
            } @else if (ContactForm.invalid && ContactForm.submitted) {
            <div class="form-invalid">Please fill the contact form.</div>
            }

            <input
              type="email"
              name="email"
              placeholder="Email*"
              required
              class="input-field"
              [(ngModel)]="email"
              #email="ngModel"
            />

            @if(email.invalid && (email.dirty || email.touched)) {
            <div class="form-invalid">Email is required</div>
            } @else if (ContactForm.invalid && ContactForm.submitted) {
            <div class="form-invalid">Please fill the contact form.</div>
            }

            <input
              type="text"
              name="subject"
              required
              placeholder="Subject*"
              class="input-field"
              [(ngModel)]="subject"
              #subject="ngModel"
            />

            @if(subject.invalid && (subject.dirty || subject.touched)) {
            <div class="form-invalid">Subject is required</div>
            } @else if (ContactForm.invalid && ContactForm.submitted) {
            <div class="form-invalid">Please fill the contact form.</div>
            }

            <textarea
              name="message"
              placeholder="Message*"
              required
              class="textarea"
              [(ngModel)]="message"
              #message="ngModel"
            ></textarea>

            @if(message.invalid && (message.dirty || message.touched)) {
            <div class="form-invalid">Message is required</div>
            } @else if (ContactForm.invalid && ContactForm.submitted) {
            <div class="form-invalid">Please fill the contact form.</div>
            }

            <button type="submit" class="btn lable-lg">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  `,
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
