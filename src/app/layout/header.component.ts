/** @format */

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
	selector: 'cmp-header',
	template: `
		<div class="header">
			<span class="worker-name">Albert Pastor Martínez</span>
			<span class="title">Angular Developer</span>
		</div>
	`,
	styles: ``,
	standalone: true,
	imports: [CommonModule]
})
export class HeaderComponent {}
