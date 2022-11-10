import { Component, OnInit } from '@angular/core';
import { mockData } from 'src/app/data/mockData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards:any = {}
  constructor() { 
     this.cards = mockData
  }

  ngOnInit(): void {
  }

}
