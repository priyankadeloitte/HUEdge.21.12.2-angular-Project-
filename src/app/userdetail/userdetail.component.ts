import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {

  public profileForm!: FormGroup;

  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  titleModel= ''

  roleModel= ''

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      displayName:['',Validators.required],
      firstName:['',Validators.required],
      lastName:[''],
      areaOfInterest: this.formBuilder.array([]),
      aboutYourself:['']



    })


  }


  isShown: boolean = false ; // hidden by default


toggleShow() {

this.isShown = ! this.isShown;

}



  submitForm() {
    console.log(this.profileForm);

      alert("Your profile is updated.");



  }

}


