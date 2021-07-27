import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstimatesService } from '../../services/estimates.service';

@Component({
  selector: 'app-additionalinfo',
  templateUrl: './additionalinfo.component.html',
  styleUrls: ['./additionalinfo.component.css']
})
export class AdditionalinfoComponent implements OnInit {

  wantsMaterials = false;
  addTable = false;
  addOverView = false;
  constructor(private router : Router, private route : ActivatedRoute, private estimateService : EstimatesService) { }
  materials =[] ;
  count = 1;
  overView = ""
  ngOnInit(): void {
  }

  overViewOn(){
    this.addOverView = true;
  }
  addMaterial(material){
    this.materials.push(material)
    this.count++;
  }
  addMaterials(){
    this.wantsMaterials = true;
  }

  addMaterialsTable(){
    this.addTable = true;
  }

  continue(form){
    this.estimateService.setMaterials({materials : this.materials, overView : this.overView})
    this.estimateService.setCount(this.estimateService.getCount()+1)
    this.router.navigate(['../pictures'], {relativeTo: this.route})
  }

}
