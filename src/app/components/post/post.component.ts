import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
  }
  stData(data:NgForm){
    console.log(data.value)
    this.studentService.postData(data.value).subscribe((res)=>{
      console.log(res)
    })
}
}
