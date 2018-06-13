import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-schedules-details',
  templateUrl: './schedules-details.component.html',
  styleUrls: ['./schedules-details.component.scss']
})
export class SchedulesDetailsComponent implements OnInit {

  @Input() monthlyEmis:any
  constructor() { }

  ngOnInit() {
  }

}
