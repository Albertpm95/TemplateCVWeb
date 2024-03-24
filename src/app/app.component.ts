/** @format */

import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { SkillLevelBarComponent } from "./components/skill-level-bar.component";

@Component({
  selector: "app-root",
  template: `<div class="page" *ngIf="curriculum">
    <div class="content">
      <div class="short-column">
        <div class="small-container lenguages">
          <span class="section-title">Idiomas</span>
          <skill-level-bar
            *ngFor="let lenguage of curriculum.lenguages"
            [name]="lenguage.name"
            [label]="lenguage.label"
            [divisions]="10"
            [completed]="lenguage.completed"
            [color]="colorAccent"
          ></skill-level-bar>
        </div>
      </div>
      <div class="big-column">
        <div class="big-container experiences">
          <span class="section-title">Experiencia</span>
          <div
            class="experience"
            *ngFor="let experience of curriculum.experiences; let last = last"
          >
            <div class="experience-header">
              <span class="company-name"
                ><strong>Compañía:</strong> {{ experience.companyName }}</span
              >
              <span class="duration"
                ><strong
                  >{{ experience.startDate }} - {{ experience.endDate }}</strong
                ></span
              >
            </div>
            <span class="position"
              ><strong>Posición:</strong> {{ experience.position }}</span
            >
            <div class="resume">
              <p *ngIf="experience.resume">
                {{ experience.resume }}
              </p>
            </div>
            <div class="achievements">
              <p
                class="achievement"
                *ngFor="let achievement of experience.achievements"
              >
                {{ achievement }}
              </p>
            </div>
            <div class="stack">
              <span><strong>Stack utilizado:</strong></span
              ><span
                class="tool"
                *ngFor="let tool of experience.stack; let last = last"
                >{{ tool
                }}<span *ngIf="!last" class="tool-separator"> - </span></span
              >
            </div>
            <div
              class="separator"
              [ngStyle]="{ 'background-color': colorAccent }"
              *ngIf="!last"
            ></div>
          </div>
        </div>
        <div class="big-container titles">
          <span class="section-title">Educación</span>
          <div class="education" *ngFor="let education of curriculum.education">
            <span class="title">
              <strong>{{ education.title }}</strong>
            </span>
            <span class="colleage">{{ education.colleage }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>`,
  styles: `.page
    height: 100%
    width: 100%
    display: flex
    flex-flow: column nowrap
    .header
        width: 100%
        padding: 2.5rem 0
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        .worker-name
            font-size: 6rem
            margin: 2rem 0
        .title
            font-size: 3rem
    .content
        display: flex
        width: 100%
        height: 100%
        flex-direction: row
        .short-column
            display: flex
            flex-direction: column
            width: fit-content
            padding: 0 1rem
            .small-container
                display: flex
                flex-flow: column nowrap
                width: 100%
                margin: 1rem 0
                skill-level-bar
                    margin: 1rem 0
            .tools
                .tool
                    margin-left: 1rem
        .big-column
            display: flex
            flex-direction: column
            width: fit-content
            padding: 0 1rem
            color: #333
            background-color: whitesmoke
            .big-container
                display: flex
                flex-flow: column nowrap
                width: fit-content
                margin: 1rem 0
                .experience
                    display: flex
                    flex-flow: column
                    .experience-header
                        display: flex
                        flex-flow: row nowrap
                        justify-content: space-between
                .resume
                    p
                        padding-left: 0
                        margin-left: 0
                .achievements
                    padding-left: 1rem
                .stack
                    display: flex
                    flex-direction: row
                    .tool-separator
                        margin: auto 1rem
                .separator
                    width: 100%
                    height: 8px
                    width: 25%
                    margin: 2rem auto
                    border-radius: 4px
                titles
                    display: flex

`,
  standalone: true,
  imports: [CommonModule, SkillLevelBarComponent, RouterOutlet],
})
export class AppComponent {
  title = "TemplateCVWeb";

  colorAccent = "lightgreen";
  curriculum = {
    personalDetails: {
      email: {
        label: "Correo electrónico",
        value: "Albertpm95@outlook.com",
        icon: "fas fa-envelope",
      },
      address: {
        label: "Dirección",
        value: "Valencia",
        icon: "fas fa-map-marker-alt",
      },
      phoneNumber: {
        label: "Numero de teléfono",
        value: "+34 669 865 675",
        icon: "fas fa-phone",
      },
      birthDate: {
        label: "Fecha de nacimiento",
        value: "8 Feb, 1995",
        icon: "fas fa-birthday-cake",
      },
      urlLinkedIn: {
        label: "LinkedIn",
        value: "https://www.linkedin.com/in/albertpm95/",
        icon: "fab fa-linkedin",
      },
      urlGithub: {
        label: "GitHub",
        value: "https://github.com/Albertpm95",
        icon: "fab fa-github",
      },
    },
    skills: [
      {
        name: "Angular",
        subname: "HTML/CSS/Typescript",
        label: "",
        completed: 0,
      },
      { name: "FastAPI", subname: "Python", label: "", completed: 0 },
      {
        name: "Spring Boot",
        subname: "Java",
        label: "",
        completed: 0,
      },
    ],
    tools: [
      { name: "Github" },
      { name: "Ubuntu" },
      { name: "VSCode" },
      { name: "Postman" },
    ],
    experiences: [
      {
        companyName: "Ferchau",
        position: "Software Developer",
        startDate: "Abr 2021",
        endDate: "Act",
        resume:
          "Empresa alemana proveedora de servicios de Ingeneria e Informatica.",
        achievements: [
          "Desarrollo de una PoC para una gran empresa del sector de distribucion generalista.",
          "Identifique y corregi diversas funciones problematicas del backend.",
          "Propuse la reestructuracion y simplificacion de parte del backend para mejorar la legibilidad y mantenimeinto del codigo.",
          "Lideré el proceso de pruebas del despliegue de la aplicacion tanto en servidor interno como el servidor de integracion del cliente.",
          "Participé en todas las reuniones relacionadas con la prueba y desarrollo de la aplicación, ofreciendo mis conocimientos y perspectivas para mejorar el producto final.",
          "Colaboré estrechamente con el equipo para garantizar la calidad y cumplimiento de los requisitos en cada etapa del proyecto.",
        ],
        stack: [
          "Angular v14",
          "Spring Boot",
          "Linux",
          "Nginx",
          "Sonarlint",
          "Karma/Jasmine",
        ],
      },
      {
        companyName: "Capgemini",
        position: "FullStack Developer Jr.",
        startDate: "Feb 2021",
        endDate: "Oct 2021",
        resume: "",
        achievements: [
          "Desarrollo de aplicación interna para gestionar personal y equipos de trabajo. Testeo con Karma/Jasmine",
          "Desarrollo de web responsive para el onboard de nuevos trabajadores en prácticas.",
        ],
        stack: ["Angular v12", "Angular Material", "Spring Boot", "Postman"],
      },
      {
        companyName: "Engranage Lifestyle",
        position: "Frontend Developer Jr.",
        startDate: "Abr 2022",
        endDate: "Feb 2023",
        resume:
          "Empresa pequeña con un producto/plataforma enfocado a la creación de eventos de reclutamiento para Universidades de EE.UU.",
        achievements: [
          "Desarrollo de nuevas funcionalidades y optimización del workflow para mejorar la experiencia del cliente en la plataforma.",
          "Desarrollo de aplicación móvil con Angular e Ionic para el registro de usuarios mediante QR.",
          "Análisis, mantenimiento y optimización de un gran proyecto heredado basado en formularios y datatables para la construcción de eventos informativos.",
          "Diseño de web responsive modular para el landing de distintas páginas de eventos universitarios con CSS",
        ],
        stack: ["Angular v11", "Ionic", "Capacitor", "Bootstrap", "JQuery"],
      },
    ],
    education: [
      {
        title: "Grado en Ingenería Informática",
        colleage: "Universitat de Valencia",
        skills: [
          "C++",
          "Java",
          "C",
          "Python",
          "SQL",
          "HTML",
          "CSS3",
          "JavaScript",
          "Typescript",
          "FastAPI",
          "Angular",
        ],
      },
    ],
    lenguages: [
      { name: "Español", label: "Nativo", completed: 0 },
      { name: "Catalan", label: "Nativo", completed: 0 },
      {
        name: "English",
        label: "Intermedio",
        completed: 0,
      },
    ],
  };
}
