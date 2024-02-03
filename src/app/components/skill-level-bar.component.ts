/** @format */

import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "skill-level-bar",
  template: `
    <div class="bar-container">
      <span class="name" *ngIf="name"
        ><strong>{{ name }}</strong></span
      ><br />
      <small class="subname" *ngIf="subname">{{ subname }}</small>
      <div class="bar" *ngIf="completed">
        <div
          class="bar-level"
          [ngStyle]="{
            'background-color': i < completed ? color : ''
          }"
          *ngFor="let level of [].constructor(divisions); let i = index"
        ></div>
      </div>
      <span class="label" *ngIf="label">{{ label }}</span>
    </div>
  `,
  styles: `
  .bar-container
    display: flex
    align-items: center
    flex-flow: row nowrap
    width: 100%
    margin-left: 1rem

    .name
        width: fit-content
    .label
        wdith: fit-content
    .bar
        height: 25px
        display: flex
        flex-flow: row nowrap
        align-items: center
        width: 25%
        border: solid 1px white
        margin: 0 1rem
        .bar-level
            width: 28px
            height: 22px
            background-color: #333

`,
  standalone: true,
  imports: [CommonModule],
})
export class SkillLevelBarComponent {
  @Input() name = "";
  @Input() subname = "";
  @Input() label = "";
  @Input() divisions = 0;
  @Input() completed = 0;
  @Input() color = "green";
}
