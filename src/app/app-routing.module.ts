import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartdetailComponent } from './cartdetail/cartdetail.component';
import { CoursedetailComponent } from './coursedetail/coursedetail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoursesdetailService } from './services/coursesdetail.service';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'dashboard', component: DashboardComponent },
  {path:"course-detail",component:CoursedetailComponent},
  {path:"user-detail",component:UserdetailComponent},
  {path:"cart-detail",component:CartdetailComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



