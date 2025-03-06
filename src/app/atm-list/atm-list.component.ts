import { Component, OnInit, ViewChild } from '@angular/core';
import { AtmListService } from './service/atm-list.service';
import { PageEvent } from '@angular/material/paginator';
import { AtmList } from './models/atm-list.model';

@Component({
  selector: 'app-atm-list',
  templateUrl: './atm-list.component.html',
  styleUrls: ['./atm-list.component.scss'],
})
export class AtmListComponent implements OnInit {
  displayedColumns: string[] = [
    'ATM Name',
    'Manufacturer',
    'Type',
    'Serial Number',
    'Image',
    'Option',
  ];
  atmName: String = '';
  manufacturer: String = '';
  type: String = '';
  serialNumber: String = '';
  originData: AtmList[] = [];
  dataSource: AtmList[] = [];
  showDetail = true;
  pageSize = 10;
  length = 0;
  pageEvent: PageEvent;

  constructor(private atmListService: AtmListService) {}

  ngOnInit(): void {
    this.getDataTable();
  }

  getDataTable() {
    this.atmListService.getATMs().subscribe((data: AtmList[]) => {
      this.originData = data;
      this.dataSource = this.originData.slice(0, 10);
      this.length = data.length;
    });
  }

  changePage(event: PageEvent) {
    this.pageEvent = event;
    this.dataSource = this.originData.slice(
      this.pageEvent.pageIndex,
      this.pageEvent.pageIndex + this.pageEvent.pageSize
    );
  }

  editRecord(rowData: AtmList) {}
}
