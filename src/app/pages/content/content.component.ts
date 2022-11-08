import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mockData } from 'src/app/data/mockData';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string=''
  contentTitle:string=''
  contentDescription:string = ''
  private id:string | null = '0'
  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      valor =>this.id = valor.get("id")
    )
    this.setComponentValues(this.id)
  }
  setComponentValues(id:string | null){
    const result = mockData.filter(article => article.id == id)[0]
    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photo
    
  }

}
