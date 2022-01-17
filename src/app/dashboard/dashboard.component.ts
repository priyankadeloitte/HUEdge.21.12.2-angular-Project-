import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
interface SingleCourseDetail{
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
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  products: any = [];
  singleProduct: any = [];
  public searchInput:any=[];
  constructor(private coursedetail: CoursesdetailService,private httpClient: HttpClient,private router: Router ){}
  ngOnInit(): void {
    this.httpClient.get("../assets/coursesdetail.json").subscribe(data =>{
      console.log(data);
      this.products = data;
    })
    this.products = this.products.sort((low: { actual_price: number; }, high: { actual_price: number; }) => low.actual_price - high.actual_price);
  }

  item = this.coursedetail.getItems();

//ADD TO CARD IN CART COMPONENT
  addToCart(product:Courses){
    this.coursedetail.addToCart(product);

  }
  page = 1;
  count = 0;
  pageSize = 4;
  handlePageChange(event: number) {
    this.page = event;
  }

  addToWhishList(product:wishListCourses){
    this.coursedetail.addToWishList(product);

  }

  showCourseDetail(singleProduct:SingleCourseDetail){
    this.coursedetail.showSingleCourse(singleProduct);
    this.router.navigate(['./course-detail']);
  }
  getTotal() {
    let total = 0;
    for (var i = 0; i < this.item.length; i++) {
        if (this.item[i].actual_price) {
            total += parseInt(this.item[i].actual_price);

        }
    }
    return total;
 }




  sort(event: any) {
    switch (event.target.value) {
      case "Low":
        {
          this.products = this.products.sort((low: { actual_price: number; }, high: { actual_price: number; }) => low.actual_price - high.actual_price);
          break;
        }

      case "High":
        {
          this.products = this.products.sort((low: { actual_price: number; }, high: { actual_price: number; }) => high.actual_price - low.actual_price);
          break;
        }

      case "Name":
        {
          this.products = this.products.sort(function (low: { Name: number; }, high: { Name: number; }) {
            if (low.Name < high.Name) {
              return -1;
            }
            else if (low.Name > high.Name) {
              return 1;
            }
            else {
              return 0;
            }
          })
          break;
        }

      default: {
        this.products = this.products.sort((low: { Price: number; }, high: { Price: number; }) => low.Price - high.Price);
        break;
      }

    }
    return this.products;

  }





}
