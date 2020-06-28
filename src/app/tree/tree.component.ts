import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { TreeviewItem, TreeviewConfig } from 'ngx-treeview';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  items: TreeviewItem[];
  config = TreeviewConfig.create({
    hasAllCheckBox: false,
    hasFilter: false,
    hasCollapseExpand: false,
    decoupleChildFromParent: true,
    maxHeight: 500
  });
  values: any[];

  constructor(private service: DataService) { }

  ngOnInit() {
    this.items = this.service.getData();
  }

  onFilterChange(value: string) {
    console.log('filter:', value);
  }

  selectedValues(event) {
    this.values = event;
  }

}
