import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'TemplateCVWeb';

  curriculum = {
    personalDetails: {
      address: {
        label: 'Address',
        value: 'Av. Cardenal Benlloch, 60, 46021, Valencia',
        icon: 'fas fa-map-marker-alt',
      },
      phoneNumber: {
        label: 'Phone Number',
        value: '+34 669 865 675',
        icon: 'fas fa-phone',
      },
      birthDate: {
        label: 'Birth date',
        value: '8 Feb, 1995',
        icon: 'fas fa-birthday-cake',
      },
      urlLinkedIn: {
        label: 'LinkedIn',
        value: 'https://www.linkedin.com/in/albertpm95/',
        icon: 'fab fa-linkedin',
      },
      urlGithub: {
        label: 'GitHub',
        value: 'https://github.com/Albertpm95',
        icon: 'fab fa-github',
      },
    },
    skills: [
      { name: 'Angular', label: 'Intermediate', completed: 3 },
      { name: 'FastAPI', label: 'Beginner', completed: 1 },
      { name: 'Spring Boot', label: 'Beginner', completed: 1 },
    ],
    tools: [
      { name: 'Github' },
      { name: 'VSCode' },
      { name: 'Postman' },
      { name: '' },
      { name: '' },
    ],
    experience: [
      {
        companyName: 'Engranage Lifestyle',
        position: '',
        startDate: '',
        endDate: '',
        achievements: [''],
      },
    ],
    education: [],
  };
}
