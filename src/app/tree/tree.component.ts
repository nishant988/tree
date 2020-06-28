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
    decoupleChildFromParent: false,
    maxHeight: 500
  });
  values: any[];

  constructor(private service: DataService) { }

  ngOnInit() {
    this.items = this.service.getData();
  }

  selectedValues(event) {
    console.log(event)
    this.values = event;
  }

  remove(event, index) {
    if (!event.currentTarget.checked) {
      this.values.splice(index,1)
    }
  }

}
