import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scalable',
  templateUrl: './scalable.component.html',
  styleUrl: './scalable.component.css'
})
export class ScalableComponent implements OnInit{


  //Use input & outputs
  //Create modular components and insert them into this Scalable component
  //Use of ViewChild

  ngOnInit(): void {
    document.getElementById("ClassMain")?.remove()
  }

}
