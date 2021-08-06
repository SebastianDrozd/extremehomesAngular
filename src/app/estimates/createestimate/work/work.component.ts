import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstimatesService } from '../../services/estimates.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({opacity: 0}),
        animate(2000)
      ])
    ])
  ]
})
export class WorkComponent implements OnInit {
   tasks = []
   count = 1;
   addTasks = false;
   customer = {}
  selectedDifficulty = ""
  selectedCondition = ""
  selectedHours = ""
   optionsDifficulty= [
     {name : "1",value: "1"},
     {name : "2",value: "2"},
     {name : "3",value: "3"},
     {name : "4",value: "4"},
     {name : "5",value: "5"},
   ]
   optionsCondition= [
    {name : "Excellent",value: "Excellent"},
    {name : "Good",value: "Good"},
    {name : "Moderate",value: "Moderate"},
    {name : "Bad",value: "Bad"},
    {name : "Worst",value: "Worst"},
  ]
  optionsHours= [
    {name : "40+",value: "40+"},
    {name : "20-30",value: "20-30"},
    {name : "10-20",value: "10-20"},
    {name : "0-10",value: "0-10"}
   
  ]
  work = {workType: "",
     difficulty: "",
     condition: "",
      hours: "" , 
      workDescription : "",
      tasks: [] }
  constructor(private router : Router, private route : ActivatedRoute, private estimateService : EstimatesService) { }

  ngOnInit(): void {
    this.customer = this.estimateService.getCustomer()
    this.work = JSON.parse(localStorage.getItem("work"))
    console.log("this woprk", this.work)
    this.selectedDifficulty = this.work.difficulty
    this.selectedCondition = this.work.condition
    this.selectedHours = this.work.hours
    this.tasks = this.work.tasks
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
    this.tasks = this.tasks.filter(x => x.description !== id)
  }
  continue(form){
    this.work.tasks = this.tasks
    this.estimateService.setCount(this.estimateService.getCount()+1)
    this.estimateService.setWork(this.work)
    localStorage.setItem("work",JSON.stringify(this.work))
    this.router.navigate(['../additional-info'], {relativeTo: this.route})
  }

  selectDifficulty($event){
    this.selectedDifficulty =  $event.target.options[$event.target.options.selectedIndex].text
   console.log("difficulty", this.selectedDifficulty)
  }
  selectCondition($event){
    this.selectedCondition =  $event.target.options[$event.target.options.selectedIndex].text
   console.log("difficulty", this.selectedDifficulty)
  }
  selectHours($event){
    this.selectedHours =  $event.target.options[$event.target.options.selectedIndex].text
   console.log("difficulty", this.selectedDifficulty)
  }


}
