import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title: string;

  searchText: string;

  constructor() { }

  ngOnInit() {
    this.searchText = '';
  }

  searchTask($event: any): void {
    $event.preventDefault();
    console.log($event.target.value)
    this.searchText = $event.target.value;
  }

}
