import { Component ,OnInit} from '@angular/core';
import { ApiCallService } from './api-call.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  name:any='';
  email:any='';
  password:any='';
  dob:any;
  pic:any;

  formval1:boolean=false
  formval2:boolean=true
  formval3:boolean=true
  
  constructor(private Api: ApiCallService){}

  ngOnInit() {
  
  }

  form1(){
this.formval1 = true;
this.formval2 = false
  }

  form2(){
this.formval2 = true;
this.formval3= false
  }

  formBack2(){
    this.formval1 = false;
    this.formval2 = true
  }

  formBack3(){
    this.formval2 = false
this.formval3 = true

  }

  submit(){
    let objData={
      name:this.name,
      email:this.email,
      password:this.password,
    }
this.Api.post('http://localhost:3000/api/auth/sign-up',objData).subscribe(res=>{
  console.log("Dddd",res)
})
  }

}
