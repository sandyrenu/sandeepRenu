import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient , HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  email : any;
  constructor(private http : HttpClient) { }

  ngOnInit() {
  }
  onSubmit(form : NgForm)
  {
    console.log(form.value);
    this.email = form.value;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post('https://formspree.io/f/xrgjvvkv',
      { name: this.email.name, replyto: this.email.email, message: this.email.message },
      { 'headers': headers }).subscribe(
        response => {
          console.log(response);
        }
      );
  }
}
