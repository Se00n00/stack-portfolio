import { Component } from '@angular/core';
import { signal } from '@angular/core';

@Component({
  selector: 'app-showcase',
  imports: [],
  templateUrl: './showcase.component.html',
  styleUrl: './showcase.component.css'
})
export class ShowcaseComponent {
  projects_list = signal(false)
  list = [10,23, "ngrx"]
}
