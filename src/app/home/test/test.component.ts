import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  todo = [
    'https://www.futwiz.com/assets/img/fifa20/faces/1114.png',
    'https://www.futwiz.com/assets/img/fifa20/faces/134375751.png',
    'https://www.futwiz.com/assets/img/fifa20/faces/190042.png',
    'https://www.futwiz.com/assets/img/fifa20/faces/237067.png'
  ];

  done = [
    'https://www.futwiz.com/assets/img/fifa20/faces/1114.png',
    'https://www.futwiz.com/assets/img/fifa20/faces/1114.png',
    'https://www.futwiz.com/assets/img/fifa20/faces/1114.png',
    'https://www.futwiz.com/assets/img/fifa20/faces/1114.png',
    'https://www.futwiz.com/assets/img/fifa20/faces/1114.png'
  ];
  gklist = [
    '',
  ];
  rblist = [
    '',
  ];
  rwblist = [
    '',
  ];
  lblist = [
    '',
  ];
  lwblist = [
    '',
  ];
  lmlist = [
    '',
  ];
  lcmlist = [
    '',
  ];
  rcmlist = [
    '',
  ];
  rmlist = [
    '',
  ];
  lcflist = [
    '',
  ];
  rcflist = [
    '',
  ];


  constructor() { }

  ngOnInit() {
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log(event.currentIndex);
    } else {
      
      if(event.container.id==="gk"){
        console.log(event.currentIndex);
        var moveditem= JSON.parse(JSON.stringify(event.container.data[event.currentIndex]));
        this.gklist[0] = moveditem;            
        console.log(moveditem);        
      } 
      if(event.container.id==="rb"){
        console.log(event.currentIndex);
        var moveditem= JSON.parse(JSON.stringify(event.container.data[event.currentIndex]));
        this.rblist[0] = moveditem;            
        console.log(moveditem);        
      } 
      console.log(this.done);
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}
