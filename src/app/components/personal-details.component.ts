/** @format */

import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "cmp-personal-skills",
  template: `
    <div
      class="small-container datos-personales"
      *ngIf="curriculum.personalDetails"
    >
      <span class="section-title">Detalles personales</span>
      <span *ngIf="curriculum.personalDetails.email">
        <i
          [ngClass]="curriculum.personalDetails.email.icon"
          [ngStyle]="{ color: colorAccent }"
        ></i
        >{{ curriculum.personalDetails.email.value }}
      </span>
      <span *ngIf="curriculum.personalDetails.address">
        <i
          [ngClass]="curriculum.personalDetails.address.icon"
          [ngStyle]="{ color: colorAccent }"
        ></i
        >{{ curriculum.personalDetails.address.value }}
      </span>
      <span *ngIf="curriculum.personalDetails.phoneNumber">
        <i
          [ngClass]="curriculum.personalDetails.phoneNumber.icon"
          [ngStyle]="{ color: colorAccent }"
        ></i
        >{{ curriculum.personalDetails.phoneNumber.value }}
      </span>
      <span *ngIf="curriculum.personalDetails.birthDate">
        <i
          [ngClass]="curriculum.personalDetails.birthDate.icon"
          [ngStyle]="{ color: colorAccent }"
        ></i
        >{{ curriculum.personalDetails.birthDate.value }}
      </span>
      <span *ngIf="curriculum.personalDetails.urlLinkedIn">
        <i
          [ngClass]="curriculum.personalDetails.urlLinkedIn.icon"
          [ngStyle]="{ color: colorAccent }"
        ></i
        ><a href="{{ curriculum.personalDetails.urlLinkedIn.value }}"
          >LinkedIn</a
        >
      </span>
      <span *ngIf="curriculum.personalDetails.urlGithub">
        <i
          [ngClass]="curriculum.personalDetails.urlGithub.icon"
          [ngStyle]="{ color: colorAccent }"
        ></i
        ><a href="{{ curriculum.personalDetails.urlGithub.value }}">GitHub</a>
      </span>
    </div>
  `,
  styles: ``,
  standalone: true,
  imports: [CommonModule],
})
export class PersonalDetailsComponent {
  @Input() curriculum: any;
  @Input() colorAccent: any;
}
