import { Component, OnInit } from '@angular/core';
import { AboutService } from '../services/about.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  about : any;
  about1 : any;
  constructor(private AboutService : AboutService) { }

  ngOnInit() {
    this.about= this.AboutService.about;
    this.about1= this.AboutService.about2;

  }
}
