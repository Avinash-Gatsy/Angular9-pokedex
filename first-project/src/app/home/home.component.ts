import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  companyLogo:string;
  constructor() { }

  ngOnInit(): void {
    this.companyLogo = "<span style='font-size:50px;'>&#129497;&#127996;</span>";
  }

}
