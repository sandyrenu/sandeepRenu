import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './sharedFolder/footer/footer.component';
import { HeaderComponent } from './sharedFolder/header/header.component';
import { AboutComponent } from './about/about.component';
import { SplitPipe } from './pipes/split.pipe';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
    SplitPipe,
    ExperienceComponent,
    SkillsComponent,
    EducationComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  FormsModule,
  HttpClientModule 
    // NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
