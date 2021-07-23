import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-additionalinfo',
  templateUrl: './additionalinfo.component.html',
  styleUrls: ['./additionalinfo.component.css']
})
export class AdditionalinfoComponent implements OnInit {

  wantsMaterials = false;
  addTable = false;
  constructor() { }

  ngOnInit(): void {
  }

  addMaterials(){
    this.wantsMaterials = true;
  }

  addMaterialsTable(){
    this.addTable = true;
  }

}
