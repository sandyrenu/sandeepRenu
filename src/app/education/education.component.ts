import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  InterData: string;
  tenthData: string;

  constructor() { }
  btechData : any;
  Intermediate : any ;
  class10 : any;
  ngOnInit() {
    this.btechData = "Graduated in Computer Science and Engineering Department with CGPA of 7.60 .Published the paper on Machine Learning. Worked along with multiple Ph.d scholars to make the project done."
    this.InterData = "Got 98 percentage in Board Exams. Achieved Top 0.5 percentile rank in JEE mains."
    this.tenthData = "Achieved 9.7 CGPA."


  }

}
