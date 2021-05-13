import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Order } from './order.model';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  numOfEntries = 3;
  orders: Order[] = [
    new Order('ORDER0001', 49, 'success'),
    new Order('ORDER0002', 49, 'success'),
    new Order('ORDER0003', 49, 'success'),
    new Order('ORDER0004', 49, 'success'),
    new Order('ORDER0005', 49, 'success'),
    new Order('ORDER0006', 49, 'success'),
    new Order('ORDER0007', 49, 'success'),
    new Order('ORDER0008', 49, 'success'),
    new Order('ORDER0009', 49, 'success'),
    new Order('ORDER0010', 49, 'success'),
    new Order('ORDER0011', 49, 'success'),
    new Order('ORDER0012', 49, 'success'),
    new Order('ORDER0013', 49, 'success'),
    new Order('ORDER0014', 49, 'success'),
    new Order('ORDER0015', 49, 'success'),
    new Order('ORDER0016', 49, 'success'),
    new Order('ORDER0017', 49, 'success'),
    new Order('ORDER0018', 49, 'success'),
    new Order('ORDER0019', 49, 'success'),
    new Order('ORDER0020', 49, 'success'),
    new Order('ORDER0021', 49, 'success'),
    new Order('ORDER0022', 49, 'success'),
  ];
  config: any;
  @ViewChild('numEntries') numEntries;
  configChanged = new Subject<{id: string, itemsPerPage: number, currentPage: number, totalItems: number}>();

  constructor() {
    this.config = {
      id: 'custom',
      itemsPerPage: this.numOfEntries,
      currentPage: 1,
      totalItems: this.orders.length
    }
  }

  ngOnInit() {
    this.configChanged.subscribe(
      (config: { id: string, itemsPerPage: number, currentPage: number, totalItems: number }) => {
        this.config = config;
        console.log(this.config)
      }
    );
    // this.numOfEntries = this.numEntries.nativeElement.value;
  }

  onPageChange(event){
    console.log(event);
    this.config.currentPage = event;
  }

  onChange() {
    this.config.itemsPerPage = this.numEntries.nativeElement.value;
    this.configChanged.next(this.config);
  }

}
