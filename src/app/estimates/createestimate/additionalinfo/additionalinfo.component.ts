import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstimatesService } from '../../services/estimates.service';

@Component({
  selector: 'app-additionalinfo',
  templateUrl: './additionalinfo.component.html',
  styleUrls: ['./additionalinfo.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({opacity: 0}),
        animate(2000)
      ])
    ]),
    trigger('fade2', [
      transition('void => *', [
        style({opacity: 0}),
        animate(1000)
      ])
    ])
  ]
})
export class AdditionalinfoComponent implements OnInit {

  wantsMaterials = true;
  addTable = false;
  addOverView = false;
  constructor(private router : Router, private route : ActivatedRoute, private estimateService : EstimatesService) { }
  materials =[] ;
  count = 1;
  overView = ""
  work;
  cost = 0;
  ngOnInit(): void {
    this.work = this.estimateService.getWork();
    console.log("startup",this.work)
  }

  overViewOn(){
    this.addOverView = true;
  }
  addMaterial(material){
    this.materials.push(material)
    console.log(this.materials)
    this.count++;
    console.log("Material", material.cost, "Cost var", this.cost)
    this.cost += parseInt(material.materialCost)
  }
  addMaterials(){
    this.wantsMaterials = true;
    
  }

  addMaterialsTable(){
    this.addTable = true;
  }

  continue(form){
    this.estimateService.setMaterials({materials : this.materials, overView : this.overView})
    localStorage.setItem("materials",JSON.stringify({materials : this.materials, overView : this.overView}))
    this.estimateService.setCount(this.estimateService.getCount()+1)
    this.router.navigate(['../pictures'], {relativeTo: this.route})
  }
  no(){
    this.router.navigate(['../pictures'],  {relativeTo: this.route})
    localStorage.setItem("materials",JSON.stringify({materials : this.materials, overView : this.overView}))
  }

  deleteMaterial(name){
    this.materials = this.materials.filter(material => material.materialName !== name)
  }

}
