/** @format */

import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { SkillLevelBarComponent } from "./skill-level-bar.component";

@Component({
  selector: "cmp-skills",
  template: `
    <div class="small-container skills">
      <span class="section-title">Habilidades</span>
      <skill-level-bar
        *ngFor="let skill of skills"
        [name]="skill.name"
        [subname]="skill.subname"
        [label]="skill.label"
        [divisions]="10"
        [completed]="skill.completed"
        [color]="colorAccent"
      ></skill-level-bar>
    </div>
  `,
  styles: ``,
  standalone: true,
  imports: [CommonModule, SkillLevelBarComponent],
})
export class SkillsComponent {
  @Input() skills: any[] = [];
  @Input() colorAccent: any;
}
