import { Component, OnInit } from '@angular/core';
import { AboutService } from '../services/about.service';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor(private AboutService: AboutService) { }
  skillsData: any;

  ngOnInit() {
    this.skillsData = this.AboutService.getSkillsData;
  }

}
