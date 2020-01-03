import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-squad',
  templateUrl: './squad.component.html',
  styleUrls: ['./squad.component.css']
})
export class SquadComponent implements OnInit {

  todo = [
    'https://www.futwiz.com/assets/img/fifa20/faces/1114.png',
    'https://www.futwiz.com/assets/img/fifa20/faces/134375751.png',
    'https://www.futwiz.com/assets/img/fifa20/faces/190042.png',
    'https://www.futwiz.com/assets/img/fifa20/faces/237067.png',
    'https://www.futwiz.com/assets/img/fifa20/faces/100856281.png',
    'https://www.futwiz.com/assets/img/fifa20/faces/20801.png',
    'https://www.futwiz.com/assets/img/fifa20/faces/242519.png',
    'https://www.futwiz.com/assets/img/fifa20/faces/226764.png',
    'https://www.futwiz.com/assets/img/fifa20/faces/192181.png',
    'https://www.futwiz.com/assets/img/fifa20/faces/214100.png',
    'https://www.futwiz.com/assets/img/fifa20/faces/1625.png'
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

  teamPosition = [
    'Choose position',
    '4-4-2',
    '4-3-3'
  ]
  position: string = "1";
  constructor() { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log(event.currentIndex);
    } else {
      console.log(event.currentIndex);
      var moveditem = JSON.parse(JSON.stringify(event.container.data[event.currentIndex]));
     // this.gklist[0] = moveditem;
      console.log(moveditem);
      console.log(this.done);
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
  changePosition(e) {
    console.log(e.target.value);
    if (this.teamPosition[0] !== e.target.value) {
      this.position = e.target.value;
    }
  }



}
