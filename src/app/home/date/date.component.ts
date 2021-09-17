import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {

  today: Observable<Date>;

  constructor() {
    this.today = new Observable<Date>((observer: Observer<Date>) => {
      setInterval(() => observer.next(new Date()));
    });
  }

  ngOnInit(): void {
  }

}
