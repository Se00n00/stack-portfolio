import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BlogComponent } from './blog/blog.component';
import { ProjectsComponent } from './projects/projects.component';
// import { ItComponent } from './it/it.component';

export const routes: Routes = [
    {path:"",title:"portfolio", redirectTo:"/home", pathMatch:'full'},
    {path:"home",title:"portfolio-home",component:HomeComponent},
    {path:"about",title:"me",component:AboutComponent},
    // {path:"projects",title:"my projects",component:ProjectsComponent},
    {path:"blogs",title:"my blogs",component:BlogComponent},
    // {path:"home",title:"portfolio-home",component:HomeComponent, children:[
        
    // ]},
    
    {path:"**",title:"oops! page not found",component:NotfoundComponent}
];
