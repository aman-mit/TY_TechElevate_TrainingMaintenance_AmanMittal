import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RequirementService } from 'src/app/requirement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.scss']
})
export class InterviewsComponent implements OnInit {

  constructor(private service : RequirementService , private router : Router) { }

  addInterview(form: NgForm) {
    console.log(form.value);
  }
  form() {
    this.router.navigate(['../talent-hunt/create-interview'])
  }
  ngOnInit() {
  }

}
