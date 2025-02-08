import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  items = [1,13,3]
  itemss = [10,23,2]
  svgs = ['projects_svg/web.svg','projects_svg/misc.svg']
  web_developement_items = ['Ngrx','Angular','PrimeNg']

  @ViewChild('topElement') topElement!: ElementRef;

  scrolltoproject() {
    this.topElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
