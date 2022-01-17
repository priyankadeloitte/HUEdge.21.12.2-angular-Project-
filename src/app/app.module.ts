import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipePipe } from './filter-pipe.pipe';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoursedetailComponent } from './coursedetail/coursedetail.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CartdetailComponent } from './cartdetail/cartdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    WishlistComponent,
    UserdetailComponent,
    FilterPipePipe,
    CoursedetailComponent,
    CartdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
