import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allposts',
  templateUrl: './allposts.component.html',
  styleUrls: ['./allposts.component.css']
})
export class AllpostsComponent implements OnInit {
  titleSelected: String = '';

  constructor() { }

  ngOnInit(): void {
  }

  navigate() {
    console.log('navigating');
  }

  select(title: string) {
    this.titleSelected = title;
  }
}
