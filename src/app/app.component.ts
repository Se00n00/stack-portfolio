import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

import { ShowcaseComponent } from './showcase/showcase.component';
import { ChartsComponent } from './charts/charts.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, ShowcaseComponent,ChartsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'stack-portfolio';
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
}
