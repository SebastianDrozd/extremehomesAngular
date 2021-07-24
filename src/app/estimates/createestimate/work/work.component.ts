import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
   tasks = []
   count = 1;
  constructor(private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
  }

  addTask(task){
    this.tasks.push(task)
    console.log(this.tasks)
    this.count++;
  }
  
  deleteTask(id){
    this.tasks = this.tasks.filter(x => x.id !== id)
  }
  continue(){
    this.router.navigate(['../additional-info'], {relativeTo: this.route})
  }

}
