import { Component, OnInit } from '@angular/core';
import { CoursesdetailService } from '../services/coursesdetail.service';

interface Courses{
  tags:[],
  details:string,
  description:string,
  discounted_price:string,
  actual_price:string,
  author:string,
  title:string,
  id:string
}
export interface wishListCourses{
  tags:[],
  details:string,
  description:string,
  discounted_price:string,
  actual_price:string,
  author:string,
  title:string,
  id:string
}

@Component({
  selector: 'app-coursedetail',
  templateUrl: './coursedetail.component.html',
  styleUrls: ['./coursedetail.component.css']
})

export class CoursedetailComponent implements OnInit {

  constructor(private coursedetail: CoursesdetailService) { }

  ngOnInit(): void {
  }
  item = this.coursedetail.getSingleCourseDetail();
  addToCart(product:Courses){
    this.coursedetail.addToCart(product);

  }
  addToWhishList(product:wishListCourses){
    this.coursedetail.addToWishList(product);

  }


}
