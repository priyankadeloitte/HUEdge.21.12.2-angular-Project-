import { Injectable, Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";


export interface Courses{
  tags:[],
  details:string,
  description:string,
  discounted_price:string,
  actual_price:string,
  author:string,
  title:string,
  id:string
}

export interface SingleCourses{
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

export interface deleteCourses{
  tags:[],
  details:string,
  description:string,
  discounted_price:string,
  actual_price:string,
  author:string,
  title:string,
  id:string
}

export interface deleteCart{
  tags:[],
  details:string,
  description:string,
  discounted_price:string,
  actual_price:string,
  author:string,
  title:string,
  id:string
}
@Injectable({
  providedIn: 'root'
})

export class CoursesdetailService {

  products: any = [];
  constructor(private httpClient: HttpClient) { }
  ngOnInit(){
    this.httpClient.get("../assets/coursesdetail.json").subscribe(data =>{
      console.log(data);
      this.products = data;
    })
    this.products = this.products.sort((low: { actual_price: number; }, high: { actual_price: number; }) => low.actual_price - high.actual_price);
  }

  item :Courses[]=[];
  @Input() totalPrice: any;

  addToCart(product:Courses){
    const productExistInCart=this.item.find(x => x.id === product.id);
    if(!productExistInCart){
     this.item.push(product);
    window.alert('Course successfully added in the cart');
    }else{
      window.alert('Already Exist in cart');
    }
  }

  checkoutCarts(){
    if(confirm("You have successfully placed your order ")) {
      this.item.length=0;
    }

  }
  wishListItem :wishListCourses[]=[];
  addToWishList(product:wishListCourses){
    const productExistInWhishList=this.wishListItem.find(x => x.id === product.id);
    if(!productExistInWhishList){
     this.wishListItem.push(product);
    window.alert('Course successfully added in the wishlist');
    }else{
      window.alert('Already Exist in wishlist');
    }
  }

  singleProduct :SingleCourses[]=[];
  showSingleCourse(product:SingleCourses){
    this.singleProduct = [];
    const productExistInCart=this.item.find(x => x.id === product.id);
    if(!productExistInCart){
     this.singleProduct.push(product);
    }else{
      this.singleProduct.push(product);
    }
  }

  getItems() {
    return this.item;
  }
  getSingleCourseDetail(){
    return this.singleProduct;
  }

  getWishListCourses(){
    return this.wishListItem;
  }

  getCartCount(){
    this.item.length;
  }
  deleteCourses(product:deleteCourses){
    const index = this.wishListItem.indexOf(product);
    this.wishListItem.splice(index, 1);
  }

  deleteCart(product:deleteCart){
    const index = this.item.indexOf(product);
    this.item.splice(index, 1);
  }



}
