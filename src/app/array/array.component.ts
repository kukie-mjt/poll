import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { flattenStyles } from '@angular/platform-browser/src/dom/dom_renderer';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent  {
  stringlist = [
    'A','B','C','D','E'

    
  ]

  movies = [ {
    name: 'A',
    isDisable: false
  },{
    name: 'B',
    isDisable: false
  },{
    name: 'C',
    isDisable: false
  },{
    name: 'D',
    isDisable: false
  },{
    name: 'D',
    isDisable: false
  },{
    name: 'E',
    isDisable: false
  }
  ];
  nme: string;
  constructor(){
    this.nme = '';
  }

delete(index: any) {
 

  this.stringlist.splice(index,1);
}

addNew() {
  this.stringlist.push();
  stringlist:this.stringlist;
  isChecked: false
}

addString() {
  if (this.nme === '') {
    console.log('im empty');
    
  } else {
    this.stringlist.push(this.nme);
    
  }
}

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.stringlist, event.previousIndex, event.currentIndex);
  }

  

}


