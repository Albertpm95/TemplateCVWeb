import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'TemplateCVWeb';

  colorAccent = 'lightgreen';
  curriculum = {
    personalDetails: {
      email: {
        label: 'Correo electrónico',
        value: 'Albertpm95@outlook.com',
        icon: 'fas fa-envelope',
      },
      address: {
        label: 'Dirección',
        value: 'Valencia',
        icon: 'fas fa-map-marker-alt',
      },
      phoneNumber: {
        label: 'Numero de teléfono',
        value: '+34 669 865 675',
        icon: 'fas fa-phone',
      },
      birthDate: {
        label: 'Fecha de nacimiento',
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
      {
        name: 'Angular',
        subname: 'HTML/CSS/Typescript',
        label: '',
        completed: 0,
      },
      { name: 'FastAPI', subname: 'Python', label: '', completed: 0 },
      {
        name: 'Spring Boot',
        subname: 'Java',
        label: '',
        completed: 0,
      },
    ],
    tools: [
      { name: 'Github' },
      { name: 'Ubuntu' },
      { name: 'VSCode' },
      { name: 'Postman' },
    ],
    experiences: [
      {
        companyName: 'Ferchau',
        position: 'Software Developer',
        startDate: 'Abr 2021',
        endDate: 'Act',
        resume:
          'Empresa alemana proveedora de servicios de Ingeneria e Informatica.',
        achievements: [
          'Desarrollo de una PoC para una gran empresa del sector de distribucion generalista.',
          'Identifique y corregi diversas funciones problematicas del backend.',
          'Propuse la reestructuracion y simplificacion de parte del backend para mejorar la legibilidad y mantenimeinto del codigo.',
          'Lideré el proceso de pruebas del despliegue de la aplicacion tanto en servidor interno como el servidor de integracion del cliente.',
          'Participé en todas las reuniones relacionadas con la prueba y desarrollo de la aplicación, ofreciendo mis conocimientos y perspectivas para mejorar el producto final.',
          'Colaboré estrechamente con el equipo para garantizar la calidad y cumplimiento de los requisitos en cada etapa del proyecto.',
        ],
        stack: [
          'Angular v14',
          'Spring Boot',
          'Linux',
          'Nginx',
          'Sonarlint',
          'Karma/Jasmine',
        ],
      },
      {
        companyName: 'Capgemini',
        position: 'FullStack Developer Jr.',
        startDate: 'Feb 2021',
        endDate: 'Oct 2021',
        resume: '',
        achievements: [
          'Desarrollo de aplicación interna para gestionar personal y equipos de trabajo. Testeo con Karma/Jasmine',
          'Desarrollo de web responsive para el onboard de nuevos trabajadores en prácticas.',
        ],
        stack: ['Angular v12', 'Angular Material', 'Spring Boot', 'Postman'],
      },
      {
        companyName: 'Engranage Lifestyle',
        position: 'Frontend Developer Jr.',
        startDate: 'Abr 2022',
        endDate: 'Feb 2023',
        resume:
          'Empresa pequeña con un producto/plataforma enfocado a la creación de eventos de reclutamiento para Universidades de EE.UU.',
        achievements: [
          'Desarrollo de nuevas funcionalidades y optimización del workflow para mejorar la experiencia del cliente en la plataforma.',
          'Desarrollo de aplicación móvil con Angular e Ionic para el registro de usuarios mediante QR.',
          'Análisis, mantenimiento y optimización de un gran proyecto heredado basado en formularios y datatables para la construcción de eventos informativos.',
          'Diseño de web responsive modular para el landing de distintas páginas de eventos universitarios con CSS',
        ],
        stack: ['Angular v11', 'Ionic', 'Capacitor', 'Bootstrap', 'JQuery'],
      },
    ],
    education: [
      {
        title: 'Grado en Ingenería Informática',
        colleage: 'Universitat de Valencia',
        skills: [
          'C++',
          'Java',
          'C',
          'Python',
          'SQL',
          'HTML',
          'CSS3',
          'JavaScript',
          'Typescript',
          'FastAPI',
          'Angular',
        ],
      },
    ],
    lenguages: [
      { name: 'Español', label: 'Nativo', completed: 0 },
      { name: 'Catalan', label: 'Nativo', completed: 0 },
      {
        name: 'English',
        label: 'Intermedio',
        completed: 0,
      },
    ],
  };
}
