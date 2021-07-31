import { Component, OnInit } from '@angular/core';
import start from '../../../../../main.js'
import * as file from '../../../../../main.js'
import { ActivatedRoute, Router } from '@angular/router';
import { EstimatesService } from '../../services/estimates.service';
import { animate, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css'],
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
export class PicturesComponent implements OnInit {

  constructor( private router : Router, private route : ActivatedRoute, private estimateService : EstimatesService) { }
  wantsPictures = false;
  uploaded = false;
  url = ""
  picture = null
  wantsMorePictures = true;
  pictures= []
  ngOnInit(): void {
    
  }

  addPictures(){
    this.wantsPictures= true;
    var yo = new FileReader();
  }
  download2(){
   file.download()
  }


  onSelectFile(event){
    console.log(event)
    console.log(event.target.files)
    if(event.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload=(e: any) => {
        this.url=e.target.result;
        start(this.url);
      }
    }
    this.uploaded=true;
  }

  continue(){
    this.estimateService.setCount(this.estimateService.getCount()+1)
    this.estimateService.setPictures(this.pictures)
    localStorage.setItem("pictures", JSON.stringify(this.pictures))
    this.router.navigate(['../summary'], {relativeTo: this.route})
  }

  uploadNewImage(){
    this.uploaded = false;
    this.pictures.push({imageBase: file.getImage()})
    this.wantsMorePictures= true;
    console.log(this.pictures)
    console.log(this.pictures.length)
  }

  no(){
    this.router.navigate(['../summary'],  {relativeTo: this.route})
  }
}
