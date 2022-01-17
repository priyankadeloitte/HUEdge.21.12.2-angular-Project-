import { Component, OnInit } from '@angular/core';
import { CoursesdetailService } from '../services/coursesdetail.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private coursedetail: CoursesdetailService) { }

  ngOnInit(): void {
  }




}
