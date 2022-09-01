import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-dispaly',
  templateUrl: './dispaly.component.html',
  styleUrls: ['./dispaly.component.css']
})
export class DispalyComponent implements OnInit {
  studentData:any
  constructor(private studentService:StudentService) {
    this.getstudent()
   }

  ngOnInit(): void {
    
  }

  getstudent(){
    this.studentService.loadStudent().subscribe((res)=>{
      this.studentData=res  
        console.log(this.studentData)
      })
  }
  deleteStu(id:any){
    this.studentService.deleteData(id).subscribe((res)=>{
     this.getstudent()
        console.log(this.studentData)
      })
  }

}
