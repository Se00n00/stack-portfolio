import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  items = [1,13]
  itemss = [10,23,34]
  web_developement_items = ['Ngrx','Angular','PrimeNg']
}
