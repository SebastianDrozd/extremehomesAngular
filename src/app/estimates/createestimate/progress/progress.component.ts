import { Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { EstimatesService } from '../../services/estimates.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  constructor(public estimateService : EstimatesService) { }

 ngOnInit(){

 }
  
}
