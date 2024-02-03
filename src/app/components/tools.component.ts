/** @format */

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
	selector: 'cmp-skills',
	template: `
		<div class="small-container tools">
			<span class="section-title">Herramientas</span>
			<span class="tool" *ngFor="let tool of tools">{{ tool.name }}</span>
		</div>
	`,
	styles: ``,
	standalone: true,
	imports: [CommonModule]
})
export class ToolsComponent {
	@Input() tools: any[] = [];
	@Input() colorAccent: any;
}
