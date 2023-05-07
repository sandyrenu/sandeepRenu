import { Component, OnInit } from '@angular/core';
import { AboutService } from '../services/about.service';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experienceData :any;
  constructor(private AboutService : AboutService) { }

  ngOnInit() {
    this.experienceData = this.AboutService.getExperienceDatafunc();
  }

}
