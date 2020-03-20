import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import { MainService } from '../main.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  data:any;
  constructor(public router: Router, private maineService: MainService) { }

  ngOnInit(): void {
    //this.showStudentData();
  }
  logout() {
    this.router.navigateByUrl('');
  }
  // showStudentData(){
  //   //debugger;
  //   let stdData = this.maineService.getStudentData().subscribe(respone => {
     
  //     let Details = respone;
  //     console.log(Details);
  //     //let Stdlist = Details.data;
  //     //console.log(Stdlist);

  //   });
  // }
  // StudentInfo() {
  //   this.router.navigateByUrl('dashboard/studentInfo');
  // }
}
