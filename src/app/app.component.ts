import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Date-Time'; 
  today= new Date();
  dateTime = '';
  constructor(public serviceService: ServiceService) {
    this.dateTime = serviceService.dateTime;
  }  
}
