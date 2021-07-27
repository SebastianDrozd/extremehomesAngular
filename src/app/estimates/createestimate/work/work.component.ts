import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstimatesService } from '../../services/estimates.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
   tasks = []
   count = 1;
   addTasks = false;
   customer = {}
  constructor(private router : Router, private route : ActivatedRoute, private estimateService : EstimatesService) { }

  ngOnInit(): void {
    this.customer = this.estimateService.getCustomer()
  }

  setAddTasks(){
    this.addTasks = true;
  }
  setAddTasksOff(){
    this.addTasks = false;
  }
  addTask(task){
    this.tasks.push(task)
    console.log(this.tasks)
    this.count++;
  }
  
  deleteTask(id){
    this.tasks = this.tasks.filter(x => x.id !== id)
  }
  continue(form){
    this.estimateService.setCount(this.estimateService.getCount()+1)
    this.estimateService.setWork({workType: form.workType, workDescription : form.workDescription })
    this.router.navigate(['../additional-info'], {relativeTo: this.route})
  }


}
