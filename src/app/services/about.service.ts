import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  about2 = `Software Developer with 2.3+ years of experience .
  Worked with Software Development Life Cycle(SDLC) and  agile methodologies .
  Expertise in Angular,Javascript,Node JS and UI with Responsive Designs.
  Have good understanding of Java SpringBoot,MYSQL,MongoDB & Elastic Search`

  about = "Lover of innovation and everything related to generate new knowledge.Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do."
  getExperienceData = [
    {
      id: 1,
      companyName: "Tanla Platforms",
      duration: "July-2021 to Present",
      role: "Software Development Engineer-1",
      workedOn: "Built the Arithmetic operation feature for the Chatbot includes both frontend in angular and backend in nodeJS .Optimised the angular application by implementing lazyLoading which decrease the latencyTime .Implemented the Help Center which will provide the Information about the product to the end customers .Both UI design and backend APIS are done and we can able to add the product features dynamically.Worked on DB migration from clickHouse to MongoDB and I have converted the clickHouse Queries to Mongo Queries."

    },
    {
      id: 2,
      companyName: "Persistent Systems",
      duration: "Dec-2021 to July-2021",
      role: "Software Engineer",
      workedOn: "Worked on Machine Learning Project .Undergone Training on Nodejs"
    }
  ]
  getExperienceDatafunc() {
    return this.getExperienceData;
  }
  getSkillsData = [
    {
      id:"1",
      skill : "Angular",
      progress : "100%"
    },
    {
      id:"2",
      skill : "NodeJS",
      progress : "80%"
    }, 
    {
      id:"3",
      skill : "JavaScript",
      progress : "90%"
    }, 
    {
      id:"4",
      skill : "JAVA",
      progress : "60%"
    }

  ];

  getSkillsDatafunc()
  {
   return this.getSkillsData;
  }
  constructor() { }
}
