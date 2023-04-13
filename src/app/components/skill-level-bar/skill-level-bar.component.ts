import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'skill-level-bar',
    templateUrl: './skill-level-bar.component.html',
    styleUrls: ['./skill-level-bar.component.sass'],

})

export class SkillLevelBarComponent {

    @Input() name = '';
    @Input() label = '';
    @Input() divisions = 0;
    @Input() completed = 0;
    @Input() color = 'green';

    constructor() { }
}
