import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './sharedFolder/footer/footer.component';
import { HeaderComponent } from './sharedFolder/header/header.component';
const routes: Routes = [
   {
      path:'', component : AboutComponent
   },
  {
     path:'about', component : AboutComponent
  },
  {
     path : 'experience' , component : ExperienceComponent
  },
  {
    path : 'skills' , component : SkillsComponent
 },
 {
   path : 'education' , component : EducationComponent
},
{
   path : 'contact' , component : ContactComponent
}
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
