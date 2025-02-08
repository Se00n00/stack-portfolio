import { Component, OnInit } from '@angular/core';
import { signal } from '@angular/core';
import projects from '../../../public/projects.json'

@Component({
  selector: 'app-showcase',
  imports: [],
  templateUrl: './showcase.component.html',
  styleUrl: './showcase.component.css'
})
export class ShowcaseComponent implements OnInit {
  projects_list = signal(false)

  ngOnInit(): void {
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
