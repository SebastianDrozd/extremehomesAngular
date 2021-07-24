import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
   tasks = []
   count = 1;
  constructor() { }

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

}
