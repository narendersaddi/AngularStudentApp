import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';


@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
// @Input({ 
  
// })
export class StudentInfoComponent implements OnInit {
  
  Details :any ;
  constructor(private maineService: MainService) { }
  Stdlist:any;
  stdlistInfo:any = {};
  stdgetData:any;
  saveDetails:any;
  saveStdDetails: any ={}
  ngOnInit(): void {
    this.showStudentData();
  }
  showStudentData(){
    //debugger;
    let stdData = this.maineService.getStudentData().subscribe(respone => {
    this.Details = respone;
    this.Stdlist = this.Details.data;
    console.log(this.Stdlist);

    });
  }
  editStudentData(id){
    let stdData = this.maineService.getStudentDatabyId(id).subscribe(respone => {
      console.log(respone);
      this.stdgetData = respone;
      this.stdlistInfo = this.stdgetData.data;
      console.log(this.stdlistInfo);
    });
  }
  updateStudent(saveStdDetails){

    sessionStorage.setItem('updatedInfo', JSON.stringify(saveStdDetails));
    // this.maineService.updateStdData(saveStdDetails).subscribe(data => {
    //   console.log(data);
    //  this.saveDetails = data;
    //  this.saveStdDetails = this.saveDetails.data;
    //  console.log(this.saveStdDetails);
    // });
  }
}
