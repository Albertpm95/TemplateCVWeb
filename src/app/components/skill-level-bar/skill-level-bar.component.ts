import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'skill-level-bar',
  template: `
  <div class="bar-container">
  <span class="name" *ngIf="name"><strong>{{ name }}</strong></span><br>
  <small class="subname" *ngIf="subname">{{subname}}</small>
  <div class="bar" *ngIf="completed">
    <div
      class="bar-level"
      [ngStyle]="{'background-color': (i < completed) ? color : ''}"
      *ngFor="let level of [].constructor(divisions); let i = index;"
    ></div>
  </div>
  <span class="label" *ngIf="label">{{ label }}</span>
</div>

  `,
  styleUrls: ['./skill-level-bar.component.sass'],
})
export class SkillLevelBarComponent {
  @Input() name = '';
  @Input() subname = '';
  @Input() label = '';
  @Input() divisions = 0;
  @Input() completed = 0;
  @Input() color = 'green';

  constructor() { }
}
