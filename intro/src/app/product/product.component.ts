import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  template: `<p>product name = {{name}}</p>`, 
// templateUrl'./product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  name= 'Laptop'
  ngOnInit(): void {
  }

}
