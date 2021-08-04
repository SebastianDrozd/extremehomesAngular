import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('myCanvas', {static: false}) canvas: ElementRef <HTMLCanvasElement>;
   public context: CanvasRenderingContext2D

  constructor( private router : Router, private route : ActivatedRoute, private estimateService : EstimatesService) { }
  wantsPictures = false;
  uploaded = false;
  url = ""
  picture = null
  wantsMorePictures = true;
  pictures= []
  wantSelect = false;
  index =-1;
  is_drawing = false;
  lineWidthRange ;
  private restoreArray = [];

  ngOnInit(): void {
   console.log("this",this.index)
   localStorage.setItem("index", "-1");
  }

  addPictures(){
    this.wantsPictures= true;
    var yo = new FileReader();
  }
  download2(){
   file.download()
  }


  onSelectFile(event){
    
    if(event.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload=(e: any) => {
        this.url=e.target.result;
        this.drawStartMain();
        console.log("context picture",this.context)
        
    }
    this.uploaded=true;
    
    }
    
    
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
    console.log(this.pictures)
    this.wantsMorePictures= true;
    
  }

  no(){
    this.router.navigate(['../summary'],  {relativeTo: this.route})
  }

  turnRed(){
    
    this.context.strokeStyle = "red"
  }
  turnBlue(){
    
    this.context.strokeStyle = "blue"
  }
  turnGreen(){
    
    this.context.strokeStyle = "green"
  }
  turnYellow(){
    
    this.context.strokeStyle = "yellow"
  }

  wantsSelect(){
    this.wantSelect = !this.wantSelect

    
    //@ts-ignore
    this.canvas.removeEventListener("touchstart", this.start, false);
    //@ts-ignore
   this.canvas.removeEventListener("touchmove",this. draw, false);
    //@ts-ignore
   this.canvas.removeEventListener("mousedown", this.start, false);
    //@ts-ignore
   this.canvas.removeEventListener("mousemove", this.draw, false);
    //@ts-ignore
   this.canvas.removeEventListener("touchend", this.stop, false);
    //@ts-ignore
   this.canvas.removeEventListener("mouseup", this.stop, false);
    //@ts-ignore
   this.canvas.removeEventListener("mouseout", this.stop, false);
    console.log(this.canvas)
    //file.start2()

   //@ts-ignore 
  this.canvas.addEventListener("touchstart", this.startSelect, false);
    //@ts-ignore
  this.canvas.addEventListener("mousedown", this.startSelect, false);

    //@ts-ignore
  this.canvas.addEventListener("mouseout", this.stopSelect, false);



  }

  drawStartMain(){
    //@ts-ignore
    this.canvas = document.getElementById("canvas");
    //@ts-ignore
    this.context = this.canvas.getContext("2d");
    //@ts-ignore
   this.canvas.width = 800;
   //@ts-ignore
  this.canvas.height = 400;
    console.log("thi2", this.index)
  let bgImg = new Image();
  bgImg.src = this.url;
  bgImg.onload = () => {
      this.context.drawImage(bgImg, 0, 0);
  }
 //@ts-ignore
 this.canvas.addEventListener("touchstart", this.start, false);
  //@ts-ignore
 this.canvas.addEventListener("touchmove",this. draw, false);
  //@ts-ignore
 this.canvas.addEventListener("mousedown", this.start, false);
  //@ts-ignore
 this.canvas.addEventListener("mousemove", this.draw, false);
  //@ts-ignore
 this.canvas.addEventListener("touchend", this.stop, false);
  //@ts-ignore
 this.canvas.addEventListener("mouseup", this.stop, false);
  //@ts-ignore
 this.canvas.addEventListener("mouseout", this.stop, false);

  }
   start(event) {
    this.is_drawing = true;
    
   //@ts-ignore
   this.canvas = document.getElementById("canvas");
   //@ts-ignore
   this.context = this.canvas.getContext("2d");
   console.log("thi23", this.index)
   console.log("started")
   console.log("context in start", this.context)
    this.context.beginPath();
    //@ts-ignore
    this.context.moveTo(event.clientX - this.canvas.getBoundingClientRect().left  , event.clientY - this.canvas.getBoundingClientRect().top);
    
    event.preventDefault();
  }

   draw(event){
    if(this.is_drawing){
      //@ts-ignore
      this.context.lineTo(event.clientX - this.canvas.getBoundingClientRect().left, 
      //@ts-ignore
        event.clientY - this.canvas.getBoundingClientRect().top);
       
      this.context.lineWidth = this.lineWidthRange;
      this.context.lineCap = "round";
      this.context.lineJoin = "round";
      this.context.stroke();
    }
  }
  stop(event){
    var temp = parseInt(localStorage.getItem("index"))
    if(this.is_drawing){
      this.context.stroke();
      this.context.closePath();
      this.is_drawing= false;
    }

    if(event.type != 'mouseout'){
      //@ts-ignore
      if(this.restoreArray== undefined){
        var array = [];
      }
      else{
        array = this.restoreArray
      }
       //@ts-ignore
      array.push(this.context.getImageData(0,0, this.canvas.width, this.canvas.height))
     
      localStorage.setItem("index", temp + 1 + "")
      this.restoreArray = array;
      console.log(this.restoreArray, "index", localStorage.getItem("index"))
    }
  
  }

  startSelect(event){
    //@ts-ignore
    this.canvas = document.getElementById("canvas");
    //@ts-ignore
    this.context = this.canvas.getContext("2d");
    console.log("started")
        if(this.is_drawing){
          //@ts-ignore
          this.context.lineTo(event.clientX - this.canvas.getBoundingClientRect().left, 
          //@ts-ignore
            event.clientY - this.canvas.getBoundingClientRect().top);
          this.context.strokeStyle =  "#e6fcec";
          this.context.lineWidth = 1;
          this.context.lineCap = "round";
          this.context.lineJoin = "round";
          this.context.stroke();
        }
        else{
        this.context.beginPath();
        //@ts-ignore
        this.context.moveTo(event.clientX - this.canvas.getBoundingClientRect().left, 
        //@ts-ignore
          event.clientY - this.canvas.getBoundingClientRect().top);
        event.preventDefault();
        this.is_drawing = true;
        }
  }

  stopSelect(){
    if(this.is_drawing){
			console.log("exited")
			this.context.fillStyle ='rgb(230, 252, 236,0.5)'
			this.context.fill();
			
			this.context.closePath();
			this.is_drawing= false;
		}
  }

  getImage2(){
    
    //@ts-ignore
    var image = this.canvas.toDataURL("image/png")
    //image = new Image();
      //image.src = canvas.toDataURL("image/png")
    return image
  }

  wantsDraw(){
    this.wantSelect = false;
    //@ts-ignore
    this.canvas.removeEventListener("touchstart", this.startSelect, false);
    //@ts-ignore
    this.canvas.removeEventListener("mousedown", this.startSelect, false);
    //@ts-ignore
    this.canvas.removeEventListener("mouseout", this.stopSelect, false);

        //@ts-ignore
    this.canvas.addEventListener("touchstart", this.start, false);
    //@ts-ignore
    this.canvas.addEventListener("touchmove",this. draw, false);
    //@ts-ignore
    this.canvas.addEventListener("mousedown", this.start, false);
    //@ts-ignore
    this.canvas.addEventListener("mousemove", this.draw, false);
    //@ts-ignore
    this.canvas.addEventListener("touchend", this.stop, false);
    //@ts-ignore
    this.canvas.addEventListener("mouseup", this.stop, false);
    //@ts-ignore
    this.canvas.addEventListener("mouseout", this.stop, false);
  }

  clearCanvas(){
    this.context.fillStyle= "white";
    //@ts-ignore
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    //@ts-ignore
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)
    let bgImg = new Image();
    bgImg.src = this.url;
    bgImg.onload = () => {
      this.context.drawImage(bgImg, 0, 0);
     }
     this.restoreArray = []
     this.index = -1
  }
  inputChanged(value){
    this.lineWidthRange=value.target.value
    console.log("linewith randge", this.lineWidthRange)
  }

  undoLast(){
    console.log("thi is arra",this.restoreArray)
     if(parseInt(localStorage.getItem("index")) <= 0){
       this.clearCanvas();
     }
     else{
       var num = parseInt(localStorage.getItem("index"));
       num -= 1;
      localStorage.setItem("index", "" + num )
       this.restoreArray.pop();
      
       this.context.putImageData(this.restoreArray[num],0,0)
     }
  }
}
