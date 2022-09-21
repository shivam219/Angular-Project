import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsaveService } from 'src/app/service/formsave.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

data={
  userName:"",
  userEmail:"",
  userPassword:"",
  userPhone:""
}
flag:boolean= true;

  constructor(private form:FormsaveService , private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  doSubmitForm(){
    if(this.data.userName=='' || this.data.userEmail == '' || this.data.userPassword=='' || this.data.userPhone ==''){
      this.snack.open("Your Data is not valid" ,"Ok" )
    }else{

      this.flag = false;
      console.log("try to submit form");
      console.log("Data",this.data); 
      this.form.formsave(this.data).subscribe(
        response=>{
          console.log(response);
          this.snack.open("Your Data is save" ,"Ok" )
          
        },
        error=>{
          console.log(error);
        }
        )
      }
    this.flag = true;
  }
   
}
