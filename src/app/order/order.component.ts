import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor() { }

  @HostListener('document:click', ['$event'])
  documentClick(event: MouseEvent) {
    console.log("click event noted!!!");
  }


  ngOnInit() {
  }

}
