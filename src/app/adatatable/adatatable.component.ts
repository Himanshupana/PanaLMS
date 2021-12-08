import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-adatatable',
  templateUrl: './adatatable.component.html',
  styleUrls: ['./adatatable.component.css']
})
export class ADatatableComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength:5,
      lengthMenu:[5,10,15],
      processing:true
    };
  }

}
