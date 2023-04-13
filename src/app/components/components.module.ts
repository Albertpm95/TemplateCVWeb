import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillLevelBarComponent } from './skill-level-bar/skill-level-bar.component';



@NgModule({
    declarations: [
        SkillLevelBarComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        SkillLevelBarComponent
    ]
})
export class ComponentsModule { }
