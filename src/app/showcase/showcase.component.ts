import { Component, OnInit } from '@angular/core';
import { signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import projects from '../../../public/projects.json'

@Component({
  selector: 'app-showcase',
  imports: [RouterLink],
  templateUrl: './showcase.component.html',
  styleUrl: './showcase.component.css'
})
export class ShowcaseComponent implements OnInit {
  projects_list = signal(false)
  project_categories = []
  ngOnInit(): void {
    this.project_categories = [
      {
        "image_link":"project_icons/complete.svg"
      },
      {
        "image_link":"project_icons/ml.svg"
      },
      {
        "image_link":"project_icons/programming.svg"
      },
      {
        "image_link":"project_icons/web_dev.svg"
      }
    ]
    this.project = projects;
    this.projectitem = projects[0]
  }

  public project:any[];
  projectitem:any;
  currentindex = signal(0);

  wholeclass = 'animate-fadein'
  
  crousalnext(){
    const total = this.project.length
    this.currentindex.update(index => (index+1)%total)
    this.projectitem = this.project[this.currentindex()]
  }
  crousalprev(){
    const total = this.project.length
    this.currentindex.update(index => index === 0?total :(index-1)%total)
    this.projectitem = this.project[this.currentindex()]
  }

  
  list = [10,23, "ngrx", "heritics","sigma","alpha","asdasda"]
}
