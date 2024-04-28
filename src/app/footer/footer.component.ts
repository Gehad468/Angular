import { Component } from '@angular/core';

import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'; // Importing brand icons

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {


    faEnvelope = faEnvelope;
    faPhone = faPhone;
    faLinkedin = faLinkedin;
    faGithub = faGithub;
    faTwitter = faTwitter;
  
    contactMe() {
      console.log('Contact button clicked');
    }
  }
