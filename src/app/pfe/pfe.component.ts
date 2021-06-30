import { Component, OnInit } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';


@Component({
  selector: 'app-pfe',
  templateUrl: './pfe.component.html',
  styleUrls: ['./pfe.component.css']
})
export class PfeComponent implements OnInit {


 




  treeControl = new NestedTreeControl<SOLUTION>(node => node.children);
  dataSource = new MatTreeNestedDataSource<SOLUTION>();
  treeControl1 = new NestedTreeControl<BESOINS>(node => node.children);
  dataSource1 = new MatTreeNestedDataSource<BESOINS>();
  treeControl2 = new NestedTreeControl<LACLINIQUE>(node => node.children);
  dataSource2 = new MatTreeNestedDataSource<LACLINIQUE>();

  constructor() {
    
    this.dataSource.data = TREE_DATA;
    this.dataSource1.data = TREE_DATA1;
    this.dataSource2.data = TREE_DATA2;
  }

  hasChild = (_: number, node: SOLUTION) => !!node.children && node.children.length > 0;
  hasChild1 = (_: number, node: BESOINS) => !!node.children && node.children.length > 0;
  hasChild2 = (_: number, node: LACLINIQUE) => !!node.children && node.children.length > 0;

  ngOnInit(): void {
    
  }

}
interface SOLUTION {
  name: string;
  children?: SOLUTION[];
}

interface BESOINS {
  name: string;
  children?: BESOINS[];
}
interface LACLINIQUE {
  name: string;
  children?: BESOINS[];
}

const TREE_DATA: SOLUTION[] = [
  {
    name: 'VOS SOLUTIONS',
    children: [
      {
        name: 'CHOIX 1',
        children: [
          {name: 'CHOIX01'},
          {name: 'CHOIX02'},
        ]
      }, 
    ]
  },
];

const TREE_DATA1: BESOINS[] = [
  {
    name: 'VOS BESOINS',
    children: [
      {
        name: 'CHOIX 1',
        children: [
          {name: 'CHOIX01'},
          {name: 'CHOIX02'},
        ]
      }, 
    ]
  },
];

const TREE_DATA2: LACLINIQUE[] = [
  {
    name: 'LA CLINIQUE',
    children: [
      {
        name: 'CHOIX 1',
        children: [
          {name: 'CHOIX01'},
          {name: 'CHOIX02'},
        ]
      }, 
    ]
  },
];


/**
 * @title Tree with nested nodes
 */
