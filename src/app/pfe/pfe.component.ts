import { Component, OnInit } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {PageEvent} from '@angular/material/paginator';


@Component({
  selector: 'app-pfe',
  templateUrl: './pfe.component.html',
  styleUrls: ['./pfe.component.css']
})
export class PfeComponent implements OnInit {
  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  //pageEvent: PageEvent;

  //setPageSizeOptions(setPageSizeOptionsInput: string) {
   // if (setPageSizeOptionsInput) {
     // this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    //}
  //}
public asma="aaaa"


  constructor( public pageEvent:PageEvent) { this.pageEvent
    
  }

  ngOnInit(): void {
    
  }

}