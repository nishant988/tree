import { Injectable } from '@angular/core';
import { TreeviewItem } from 'ngx-treeview';

export class DataService {
    convert(data) {
        return new TreeviewItem(data);
    }
    getData(): TreeviewItem[] {
        const items = [
            { text: 'Approved Payable Financing', value: 'Approved Payable Financing', children: [] },
            { text: 'Bills purchased Discount', value: 'Bills purchased Discount', children: [] },
            { text: 'Credit cards', value: 'Credit cards', children: [] },
            { text: 'Financial Standby LC/LG', value: 'Financial Standby LC/LG', children: [] },
            { text: 'LC Acceptance', value: 'LC Acceptance', children: [] },
            { text: 'LG Refinancing', value: 'LG Refinancing', children: [] },
            { text: 'LC/LG Limit', value: 'LC/LG Limit', children: [
                {text: 'Financial LC/LG', value: 'LC/LG Limit', children: []}
            ]}
        ]
        console.log(items.map(data => this.convert(data)))
        return items.map(data => this.convert(data));
    }
}